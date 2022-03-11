const path = require('path');
const merge = require('lodash/merge');
const Ajv = require('ajv');
const filter = require('./filters');
const format = require('./formats');
const parsers = require('./parsers');
const template = require('./templates');
const defaultPrimitives = require('./defaultPrimitives.json');
const primitivesSchema = require('./primitives.schema.json');

const ajv = new Ajv();
const validate = ajv.compile(primitivesSchema);

module.exports = (primitives) => {
  const mergedPrimitives = merge(defaultPrimitives, primitives);
  const valid = validate(mergedPrimitives);
  if (!valid) throw validate.errors;

  return {
    filter,
    format,
    parsers,
    include: [path.join(__dirname, '../source/design-tokens/icons/*.svg')],
    tokens: template(mergedPrimitives),
    platforms: {
      css: {
        transformGroup: 'css',
        files: [
          {
            format: 'css/kds-variables',
            destination: 'tokens.css',
            options: {
              outputReferences: true,
            },
            filter: 'excludeIcons',
          },
        ],
      },
      scss: {
        transformGroup: 'scss',
        files: [
          {
            format: 'scss/map-deep',
            destination: '_token-map.scss',
            options: {
              outputReferences: true,
            },
            filter: 'excludeIcons',
          },
        ],
      },
      html: {
        files: [
          {
            format: 'html/icon-sprite',
            destination: 'icon-sprite.html',
            filter: 'includeIcons',
          },
        ],
      },
      jsx: {
        files: [
          {
            format: 'jsx/icon-sprite',
            destination: 'IconSprite.jsx',
            filter: 'includeIcons',
          },
        ],
      },
      storybook: {
        transformGroup: 'css',
        files: [
          {
            format: 'storybook/tokens',
            destination: 'tokens.css',
            filter: 'excludeIcons',
          },
          {
            format: 'storybook/icons',
            destination: 'icons.html',
            filter: 'includeIcons',
          },
        ],
      },
    },
  };
};
