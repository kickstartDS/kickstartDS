const { writeFile } = require('fs/promises');
const path = require('path');
const Ajv = require('ajv');
const merge = require('lodash/merge');
const defaultPrimitives = require('./defaultPrimitives.json');
const primitivesSchema = require('./primitives.schema.json');
const config = require('./config');

const backgroundColorTemplate = require('./templates/background-color');
const borderTemplate = require('./templates/border');
const boxShadowTemplate = require('./templates/box-shadow');
const breakpointsTemplate = require('./templates/breakpoints');
const spacingTemplate = require('./templates/spacing');
const textColorTemplate = require('./templates/text-color');
const transitionTemplate = require('./templates/transition');
const typoTemplate = require('./templates/typo');
const deprecatedTemplate = require('./templates/deprecated');

const templates = [
  ['background-color', backgroundColorTemplate],
  ['border', borderTemplate],
  ['box-shadow', boxShadowTemplate],
  ['breakpoints', breakpointsTemplate],
  ['spacing', spacingTemplate],
  ['text-color', textColorTemplate],
  ['transition', transitionTemplate],
  ['typo', typoTemplate],
  ['deprecated', deprecatedTemplate],
];

const ajv = new Ajv();
const validate = ajv.compile(primitivesSchema);

const createTokens = (primitives) => {
  const mergedPrimitives = merge(defaultPrimitives, primitives);
  const valid = validate(mergedPrimitives);
  if (!valid) throw validate.errors;
  return templates.map(([name, template]) => [
    name,
    template(mergedPrimitives),
  ]);
};

const writeTokens = (primitives, folder) =>
  Promise.all(
    createTokens(primitives).map(([name, tokens]) =>
      writeFile(
        path.join(folder, `${name}.json`),
        JSON.stringify(tokens, null, 2)
      )
    )
  );

module.exports = {
  config,
  createTokens,
  writeTokens,
};
