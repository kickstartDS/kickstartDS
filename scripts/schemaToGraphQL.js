const path = require('path');
const fs = require('fs-extra');
const glob = require('fast-glob');
const { pascalCase } = require('change-case');
const chokidar = require('chokidar');
const { printSchema } = require('graphql');
const convert = require('jsonschema2graphql').default;
const rmConfig = require('../packages/@rm-frontend/build-tools/tasks/rmConfig');

const createGraphQL = async (schemaPath) => {
  const basename = path.basename(schemaPath, '.json');
  const dirname = path.dirname(schemaPath);
  const schema = await fs.readJSON(schemaPath);

  if (!(schema.title && (schema.properties || schema.allOf))) return;

  schema.title += ' GraphQL';
  const gql = convert({ jsonSchema: schema });
  fs.writeFile(
    `${dirname}/${pascalCase(
      basename.replace(/\.(schema|definitions)$/, '')
    )}.graphql`,
    printSchema(gql)
  );
};

(async () => {
  const [, , param] = process.argv;
  const schemaGlob = `${rmConfig.temppath}/patterns/**/*.schema.dereffed.json`;
  if (param === '--watch') {
    chokidar
      .watch(schemaGlob, { ignoreInitial: true })
      .on('add', createGraphQL)
      .on('change', createGraphQL);
  } else {
    const schemaPaths = await glob(schemaGlob);
    schemaPaths.forEach(createGraphQL);
  }
})();
