const yaml = require('js-yaml');
const fs = require('fs');
const url = require('url');
const fg = require('fast-glob');

const { root } = require('../../build-components/source/utils');

const netlifyAdminYaml = fs.readFileSync(
  fg.sync(`${root}/packages/tools/netlify-cms/resources/admin/config.yml`)[0],
  'utf8'
);
const netlifyAdminConfig = yaml.load(netlifyAdminYaml);

const pageConfig = require('../resources/page.config.json');
const settingsConfig = require('../resources/settings.config.json');

// TODO: try running this from inside the 'node_modules' of a project

if (!netlifyAdminConfig.collections) {
  netlifyAdminConfig.collections = [];
}

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

const getSchemaNameFromPath = (path) =>
  path.split('/').pop().split('.').slice(0, -2).pop();

const getContentElementConfig = (
  contentElementSchemaName,
  contentElementSchemaJson
) => {
  const getFieldConfig = (propertySchema, propertyName, required = []) => {
    const widget = widgetMapping(propertySchema);

    let fieldConfig = {
      label: propertySchema.title,
      name: propertyName,
      widget,
      default: Array.isArray(propertySchema.default)
        ? []
        : propertySchema.default,
      hint: propertySchema.description,
      required: required.includes(propertyName),
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
      if (Array.isArray(propertySchema.items.anyOf)) {
        fieldConfig.types = [];

        propertySchema.items.anyOf.forEach((type) => {
          const key = Object.keys(type.properties)[0];
          fieldConfig.types.push(
            getContentElementConfig(key, type.properties[key])
          );
        });
      } else {
        fieldConfig.fields = getContentElementConfig(
          propertyName,
          propertySchema.items
        ).fields;
      }
    }

    if (fieldConfig.widget === 'object') {
      if (
        propertySchema.properties &&
        !!Object.keys(propertySchema.properties).length
      ) {
        fieldConfig = getContentElementConfig(propertyName, propertySchema);
      } else {
        fieldConfig = null;
      }
    }

    return fieldConfig;
  };

  const contentElementConfig = {
    label: contentElementSchemaJson.title,
    name: contentElementSchemaName,
    widget: contentElementSchemaJson.type,
    fields: [],
  };

  Object.entries({
    ...contentElementSchemaJson.properties,
    ...contentElementSchemaJson.additionalProperties,
  }).forEach(([propertyName, propertySchema]) => {
    const fieldConfig = getFieldConfig(
      propertySchema,
      propertyName,
      contentElementSchemaJson.required
    );

    if (fieldConfig) contentElementConfig.fields.push(fieldConfig);
  });

  return contentElementConfig;
};

(async () => {
  const schemaPaths = await fg(
    `${root}/packages/components/*/lib/**/[!_]*.schema.dereffed.json`
  );

  const filteredSchemaPaths = schemaPaths.filter(
    (schemaPath) =>
      schemaPath.indexOf('sidebar') === -1 &&
      (schemaPath.indexOf('/base/') > -1 ||
        schemaPath.indexOf('/content/') > -1)
  );

  const contentElementSchemaJsons = await Promise.all(
    filteredSchemaPaths.map(async (schemaPath) =>
      JSON.parse(fs.readFileSync(schemaPath))
    )
  );

  const components = [];
  let sectionComponent;

  contentElementSchemaJsons.forEach((contentElementSchemaJson) => {
    const contentElementSchemaId = url.parse(contentElementSchemaJson.$id);
    const contentElementSchemaName = getSchemaNameFromPath(
      contentElementSchemaId.pathname
    );

    const contentElementConfig = getContentElementConfig(
      contentElementSchemaName,
      contentElementSchemaJson
    );

    if (contentElementConfig.label === 'Section') {
      sectionComponent = contentElementConfig;
      contentElements.types.push(sectionComponent);
    } else {
      components.push(contentElementConfig);
    }
  });

  sectionComponent.fields.push({
    name: 'content',
    description: 'Content for the section',
    widget: 'list',
    types: components,
  });

  netlifyAdminConfig.collections.push(settingsConfig);

  // TODO read target location from CLI parameters (optionally)
  // for a more direct way to integrate the resulting file
  fs.writeFileSync(
    `${root}/config.generated.yml`,
    yaml.dump(netlifyAdminConfig, { noRefs: true })
  );
})();
