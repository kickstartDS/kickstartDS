const path = require('path');
const storybookVariablesFormat = require('./formats/storybook/tokens');
const storybookIconsFormat = require('./formats/storybook/icons');
const htmlIconSpriteFormat = require('./formats/html/icon-sprite');
const jsxIconSpriteFormat = require('./formats/jsx/icon-sprite');
const cssKdsVariablesFormat = require('./formats/css/kds-variables');
const iconParser = require('./parsers/icon');
const ksTokensParser = require('./parsers/ks-tokens');
const { excludeIconsFilter, includeIconsFilter } = require('./filters');

module.exports = function createDictionary(StyleDictionary) {
  return StyleDictionary.registerParser(iconParser)
    .registerParser(ksTokensParser)
    .registerFilter(excludeIconsFilter)
    .registerFilter(includeIconsFilter)
    .registerFormat(storybookVariablesFormat)
    .registerFormat(htmlIconSpriteFormat)
    .registerFormat(storybookIconsFormat)
    .registerFormat(jsxIconSpriteFormat)
    .registerFormat(cssKdsVariablesFormat)
    .extend({
      include: [
        path.join(__dirname, '../source/design-tokens/fallback.ks-tokens.json'),
        path.join(__dirname, '../source/design-tokens/icons/*.svg'),
      ],
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
    });
};
