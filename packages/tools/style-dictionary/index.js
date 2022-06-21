const { writeFile } = require('fs/promises');
const path = require('path');
const Ajv = require('ajv');
const merge = require('lodash/merge');
const defaultPrimitives = require('./defaultPrimitives.json');
const primitivesSchema = require('./primitives.schema.json');
const config = require('./config');

const backgroundColorTemplate = require('./templates/background-color');
const backgroundColorSchema = require('./templates/background-color/background-color.schema.json');
const borderTemplate = require('./templates/border');
const borderSchema = require('./templates/border/border.schema.json');
const boxShadowTemplate = require('./templates/box-shadow');
const boxShadowSchema = require('./templates/box-shadow/box-shadow.schema.json');
const breakpointsTemplate = require('./templates/breakpoints');
const breakpointsSchema = require('./templates/breakpoints/breakpoints.schema.json');
const colorTemplate = require('./templates/color');
const colorSchema = require('./templates/color/color.schema.json');
const depthTemplate = require('./templates/depth');
const depthSchema = require('./templates/depth/depth.schema.json');
const spacingTemplate = require('./templates/spacing');
const spacingSchema = require('./templates/spacing/spacing.schema.json');
const textColorTemplate = require('./templates/text-color');
const textColorSchema = require('./templates/text-color/text-color.schema.json');
const transitionTemplate = require('./templates/transition');
const transitionSchema = require('./templates/transition/transition.schema.json');
const typoTemplate = require('./templates/typo');
const typoSchema = require('./templates/typo/typo.schema.json');
const deprecatedTemplate = require('./templates/deprecated');
const deprecatedSchema = require('./templates/deprecated/deprecated.schema.json');

const templates = [
  ['background-color', backgroundColorTemplate, backgroundColorSchema],
  ['border', borderTemplate, borderSchema],
  ['box-shadow', boxShadowTemplate, boxShadowSchema],
  ['breakpoints', breakpointsTemplate, breakpointsSchema],
  ['color', colorTemplate, colorSchema],
  ['depth', depthTemplate, depthSchema],
  ['spacing', spacingTemplate, spacingSchema],
  ['text-color', textColorTemplate, textColorSchema],
  ['transition', transitionTemplate, transitionSchema],
  ['typo', typoTemplate, typoSchema],
  ['deprecated', deprecatedTemplate, deprecatedSchema],
];

const ajv = new Ajv();
const validate = ajv.compile(primitivesSchema);

const createTokens = (primitives) => {
  const mergedPrimitives = merge(defaultPrimitives, primitives);
  const valid = validate(mergedPrimitives);
  if (!valid) throw validate.errors;
  return templates.map(([name, template, schema]) => {
    const tokens = template(mergedPrimitives);

    const ajvTokens = new Ajv();
    const validateTokens = ajvTokens.compile(schema);
    const validTokens = validateTokens(tokens);
    if (!validTokens) throw validateTokens.errors;

    return [name, tokens];
  });
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
