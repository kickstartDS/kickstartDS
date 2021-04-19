/* eslint-disable no-restricted-syntax */
const path = require('path');
const fs = require('fs-extra');
const glob = require('fast-glob');
const { compile } = require('json-schema-to-typescript');
const { pascalCase } = require('change-case');
const chokidar = require('chokidar');
const style = require('../.prettierrc');
const { schemaResolver } = require('./schemaResolver');

// @see https://github.com/bcherny/json-schema-to-typescript#not-expressible-in-typescript
function removeUnsupportedProps(obj) {
  for (const prop in obj) {
    if (prop === 'oneOf') delete obj[prop];
    else if (typeof obj[prop] === 'object') removeUnsupportedProps(obj[prop]);
  }
  return obj;
}

const options = {
  bannerComment:
    '/* eslint-disable */\n/**\n* This file was automatically generated by json-schema-to-typescript.\n* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,\n* and run `npm run schema2ts` to regenerate this file.\n*/',
  $refOptions: {
    resolve: {
      rm: {
        order: 1,
        canRead: schemaResolver.canRead,
        async read(file) {
          const schema = await schemaResolver.read(file);
          return removeUnsupportedProps(schema);
        },
      },
    },
  },
  style,
};

const createTypes = async (schemaPath) => {
  const basename = path.basename(schemaPath, '.json');
  const dirname = path.dirname(schemaPath);
  const schema = await fs.readJSON(schemaPath);

  if (!(schema.title && (schema.properties || schema.allOf || schema.$ref)))
    return;

  schema.title += ' Props';
  removeUnsupportedProps(schema);
  const ts = await compile(schema, schema.title, options);
  fs.writeFile(
    `${dirname}/${pascalCase(
      basename.replace(/\.(schema|definitions)$/, '')
    )}Props.ts`,
    ts
  );
};

(async () => {
  const [, , param] = process.argv;
  const schemaGlob =
    'packages/components/*/source/**/*.(schema|definitions).json';
  if (param === '--watch') {
    chokidar
      .watch(schemaGlob, { ignoreInitial: true })
      .on('add', createTypes)
      .on('change', createTypes);
  } else {
    const schemaPaths = await glob(schemaGlob);
    schemaPaths.forEach(createTypes);
  }
})();
