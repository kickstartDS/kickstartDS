const path = require('path');
const mixedColorTransform = require('./transforms/mixed-color');
const alphaColorTransform = require('./transforms/alpha-color');
const storybookVariablesFormat = require('./formats/storybook/tokens');
const storybookIconsFormat = require('./formats/storybook/icons');
const htmlIconSpriteFormat = require('./formats/html/icon-sprite');
const jsxIconSpriteFormat = require('./formats/jsx/icon-sprite');
const iconParser = require('./parsers/icon');
const { excludeIconsFilter, includeIconsFilter } = require('./filters');

module.exports = function createDictionary(StyleDictionary) {
  const cssTransforms = [
    ...StyleDictionary.transformGroup.css,
    mixedColorTransform.name,
    alphaColorTransform.name,
  ];
  const scssTransforms = [
    ...StyleDictionary.transformGroup.scss,
    mixedColorTransform.name,
    alphaColorTransform.name,
  ];
  const colorTransform = {
    name: 'color/css',
    ...StyleDictionary.transform['color/css'],
    transitive: true,
  };

  return StyleDictionary.registerParser(iconParser)
    .registerTransform(mixedColorTransform)
    .registerTransform(alphaColorTransform)
    .registerTransform(colorTransform)
    .registerFilter(excludeIconsFilter)
    .registerFilter(includeIconsFilter)
    .registerFormat(storybookVariablesFormat)
    .registerFormat(htmlIconSpriteFormat)
    .registerFormat(storybookIconsFormat)
    .registerFormat(jsxIconSpriteFormat)
    .extend({
      include: [
        path.join(__dirname, '../source/design-tokens/**/*.js'),
        path.join(__dirname, '../source/design-tokens/icons/*.svg'),
      ],
      platforms: {
        css: {
          transforms: cssTransforms,
          files: [
            {
              format: 'css/variables',
              destination: 'tokens.css',
              options: {
                outputReferences: true,
              },
              filter: 'excludeIcons',
            },
          ],
        },
        scss: {
          transforms: scssTransforms,
          files: [
            {
              format: 'scss/variables',
              destination: '_tokens.scss',
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
          transforms: cssTransforms,
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
    });
};
