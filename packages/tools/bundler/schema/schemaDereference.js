/* eslint-disable import/no-dynamic-require */
const $RefParser = require('json-schema-ref-parser');
const merge = require('json-schema-merge-allof');
const traverse = require('json-schema-traverse');

const { root } = require('../utils/utils');

const { schemaResolver } = require(`${root}/scripts/schemaResolver`);

const mergeAnyOfEnums = (schema) => {
  traverse(schema, {
    cb: (subSchema, pointer, rootSchema) => {
      const propertyName = pointer.split('/').pop();

      if (
        subSchema.anyOf &&
        subSchema.anyOf.length === 2 &&
        subSchema.anyOf.every(
          (anyOf) => anyOf.type === 'string' && anyOf.enum
        ) &&
        rootSchema.allOf &&
        rootSchema.allOf.length === 2 &&
        rootSchema.allOf.some(
          (allOf) => allOf.properties[propertyName]?.type === 'string'
        )
      ) {
        subSchema.type = subSchema.anyOf[0].type;
        subSchema.default = subSchema.anyOf[0].default;
        subSchema.enum = subSchema.anyOf.reduce((enumValues, anyOf) => {
          anyOf.enum.forEach((value) => {
            if (!enumValues.includes(value)) enumValues.push(value);
          });

          return enumValues;
        }, []);

        delete rootSchema.allOf[
          rootSchema.allOf.findIndex(
            (allOf) => allOf.properties[propertyName]?.type === 'string'
          )
        ].properties[propertyName];
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
  return merge(schema, { ignoreAdditionalProperties: true });
};

module.exports = {
  dereference,
  mergeAnyOfEnums,
};
