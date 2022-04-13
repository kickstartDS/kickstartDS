/* eslint-disable import/no-dynamic-require */
const $RefParser = require('json-schema-ref-parser');
const merge = require('json-schema-merge-allof');
const traverse = require('json-schema-traverse');

const { root } = require('./utils');

const { schemaResolver } = require(`${root}/scripts/schemaResolver`);

const mergeAnyOfEnums = (schema) => {
  traverse(schema, {
    cb: (subSchema) => {
      if (
        subSchema.type === 'string' &&
        subSchema.enum &&
        subSchema.anyOf &&
        subSchema.anyOf.length === 2 &&
        subSchema.anyOf.every((anyOf) => anyOf.type === 'string' && anyOf.enum)
      ) {
        subSchema.enum = subSchema.anyOf.reduce((enumValues, anyOf) => {
          anyOf.enum.forEach((value) => {
            if (!enumValues.includes(value)) enumValues.push(value);
          });

          return enumValues;
        }, []);

        delete subSchema.anyOf;
      }
    },
  });
};

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
  mergeAnyOfEnums(schema);

  return merge(schema, { ignoreAdditionalProperties: true });
};

module.exports = {
  dereference,
};
