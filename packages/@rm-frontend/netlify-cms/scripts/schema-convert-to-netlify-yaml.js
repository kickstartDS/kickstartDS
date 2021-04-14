const yaml = require('js-yaml');
const fs = require('fs');
const url = require('url');
const fg = require('fast-glob');
const $RefParser = require('json-schema-ref-parser');
const rmConfig = require('../../build-tools/tasks/rmConfig');

const netlifyAdminYaml = fs.readFileSync(
  fg.sync(
    `${rmConfig.rootpath}/{packages,node_modules}/@rm-frontend/netlify-cms/resources/admin/config.yml`
  )[0],
  'utf8'
);
const netlifyAdminConfig = yaml.safeLoad(netlifyAdminYaml);

const pageConfig = require('../resources/page.config.json');
const settingsConfig = require('../resources/settings.config.json');

let pagesCollection = netlifyAdminConfig.collections.find(
  (collection) => collection.name === 'pages'
);
if (!pagesCollection) {
  pagesCollection = pageConfig;
  netlifyAdminConfig.collections.push(pagesCollection);
}

const contentElements = pagesCollection.fields.find(
  (element) => element.name === 'content'
);

const useElementConfig = {
  label: 'Show',
  name: 'show',
  description: 'Choose wether to show the element, or not',
  widget: 'boolean',
  default: false,
};

const widgetMapping = (property) => {
  const mapping = {
    boolean: 'boolean',
    string: 'string',
    array: 'list',
    object: 'object',
  };

  if (property.type === 'string' && property.enum && property.enum.length) {
    return 'select';
  }

  if (
    property.type === 'string' &&
    property.format &&
    property.format === 'markdown'
  ) {
    return 'markdown';
  }

  if (
    property.type === 'string' &&
    property.format &&
    property.format === 'image'
  ) {
    return 'image';
  }

  return mapping[property.type];
};

const rmUrlToPathConverter = (schemaUrl) => {
  const urlRegExp = /^http:\/\/frontend\.ruhmesmeile\.com\/[a-z-]+\/([a-z-]+)\/([a-z-/]+)\.schema\.json(?:.*)$/g;
  const matches = urlRegExp.exec(schemaUrl);

  // TODO dedupe this! #schemaresolver
  const numberingMapping = {
    base: '0-base',
    atoms: '1-atoms',
    molecules: '2-molecules',
    organisms: '3-organisms',
    templates: '4-templates',
    pages: '5-pages',
  };

  const schemaPath = fg.sync(
    `${
      rmConfig.rootpath
    }/{packages,node_modules}/@rm-frontend/build-tools/source/${
      numberingMapping[matches[1]]
    }/**/${matches[2]}.schema.json`
  );

  return `${schemaPath[0]}${matches[3] || ''}`;
};

const rmResolver = {
  order: 1,

  canRead: /^http:\/\/frontend\.ruhmesmeile\.com/i,

  read(path) {
    return fs.readFileSync(rmUrlToPathConverter(path.url));
  },
};

const schemaLoader = async (refParser, schemaPath) =>
  refParser.dereference(schemaPath, {
    resolve: { rm: rmResolver },
  });

const getSchemaNameFromPath = (path) =>
  path.split('/').pop().split('.').slice(0, -2).pop();

const getContentElementConfig = (
  contentElementSchemaName,
  contentElementSchemaJson
) => {
  const getFieldConfig = (propertySchema, propertyName) => {
    const widget = widgetMapping(propertySchema);

    let fieldConfig = {
      label: propertySchema.title,
      name: propertyName,
      widget,
      default: propertySchema.default,
      hint: propertySchema.description,
    };

    if (fieldConfig.widget === 'select') {
      fieldConfig.options = propertySchema.enum.map((value) => {
        const split = value.split('@');

        return {
          label: split[0].trim(),
          value: split.pop().trim(),
        };
      });
    }

    if (fieldConfig.widget === 'list') {
      fieldConfig.fields = getContentElementConfig(
        propertyName,
        propertySchema.items
      ).fields;
    }

    if (fieldConfig.widget === 'object') {
      fieldConfig = getContentElementConfig(propertyName, propertySchema);
    }

    return fieldConfig;
  };

  const contentElementConfig = {
    label: contentElementSchemaJson.title,
    name: contentElementSchemaName,
    widget: contentElementSchemaJson.type,
    fields: [],
  };

  let properties = [];
  if (contentElementSchemaJson.properties) {
    properties = properties.concat(contentElementSchemaJson.properties);
  }
  if (contentElementSchemaJson.additionalProperties) {
    properties = properties.concat(
      contentElementSchemaJson.additionalProperties
    );
  }

  Object.entries({
    ...contentElementSchemaJson.properties,
    ...contentElementSchemaJson.additionalProperties,
  }).forEach(([propertyName, propertySchema]) => {
    const fieldConfig = getFieldConfig(propertySchema, propertyName);
    contentElementConfig.fields.push(fieldConfig);
  });

  // console.log(contentElementConfig);

  return contentElementConfig;
};

(async () => {
  const schemaPaths = await fg(
    `${rmConfig.rootpath}/{packages,node_modules}/@rm-frontend/build-tools/source/_patterns/**/[!_]*.schema.dereffed.json`
  );

  const filteredSchemaPaths = schemaPaths.filter(
    (schemaPath) =>
      schemaPath.indexOf('keyvisual.schema.dereffed.json') > -1 ||
      schemaPath.indexOf('teaser-box.schema.dereffed.json') > -1 ||
      schemaPath.indexOf('textpic-intextleft.schema.dereffed.json') > -1
  );

  const contentElementSchemaJsons = await Promise.all(
    filteredSchemaPaths.map(async (schemaPath) =>
      schemaLoader(new $RefParser(), schemaPath)
    )
  );

  let keyvisualContentElement;
  contentElementSchemaJsons.forEach((contentElementSchemaJson) => {
    const contentElementSchemaId = url.parse(contentElementSchemaJson.$id);
    const contentElementSchemaName = getSchemaNameFromPath(
      contentElementSchemaId.pathname
    );

    const contentElementConfig = getContentElementConfig(
      contentElementSchemaName,
      contentElementSchemaJson
    );

    if (contentElementConfig.name === 'keyvisual') {
      keyvisualContentElement = contentElementConfig;
    } else {
      contentElements.types.push(contentElementConfig);
    }
  });

  if (keyvisualContentElement) {
    keyvisualContentElement.fields.unshift(useElementConfig);
    const keyvisualIndex = pagesCollection.fields.findIndex(
      (field) => field.name === 'keyvisual'
    );
    pagesCollection.fields[keyvisualIndex] = keyvisualContentElement;
  } else {
    pagesCollection.fields = pagesCollection.fields.filter(
      (field) => field.name !== 'keyvisual'
    );
  }

  netlifyAdminConfig.collections.push(settingsConfig);

  fs.writeFileSync(
    'config.generated.yml',
    yaml.safeDump(netlifyAdminConfig, { noRefs: true })
  );
})();
