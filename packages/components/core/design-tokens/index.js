const { writeFile } = require('fs/promises');
const Ajv = require('ajv');
const merge = require('lodash/merge');
const template = require('./templates');
const defaultPrimitives = require('./defaultPrimitives.json');
const primitivesSchema = require('./primitives.schema.json');
const config = require('./config');

const ajv = new Ajv();
const validate = ajv.compile(primitivesSchema);

const createTokens = (primitives) => {
  const mergedPrimitives = merge(defaultPrimitives, primitives);
  const valid = validate(mergedPrimitives);
  if (!valid) throw validate.errors;
  return template(mergedPrimitives);
};

const writeTokens = (primitives, path) =>
  writeFile(path, createTokens(primitives));

module.exports = {
  config,
  createTokens,
  writeTokens,
};
