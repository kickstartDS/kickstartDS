/* eslint-disable import/no-dynamic-require */
const $RefParser = require('json-schema-ref-parser');
const merge = require('json-schema-merge-allof');
const { root } = require('./utils');

const { schemaResolver } = require(`${root}/scripts/schemaResolver`);

const schemaLoader = async (refParser, schemaPath) =>
  refParser.dereference(schemaPath, {
    resolve: {
      rm: {
        order: 1,
        ...schemaResolver,
      },
    },
  });

const dereference = async (schemaPath) => {
  const schema = await schemaLoader(new $RefParser(), schemaPath);
  return merge(schema, { ignoreAdditionalProperties: true });
};

module.exports = {
  dereference,
};
