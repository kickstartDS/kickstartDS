const path = require('path');
const storybookVariablesFormat = require('./formats/storybook/tokens');
const storybookIconsFormat = require('./formats/storybook/icons');
const htmlIconSpriteFormat = require('./formats/html/icon-sprite');
const jsxIconSpriteFormat = require('./formats/jsx/icon-sprite');
const iconParser = require('./parsers/icon');
const { excludeIconsFilter, includeIconsFilter } = require('./filters');

module.exports = function createDictionary(StyleDictionary) {
  return StyleDictionary.registerParser(iconParser)
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
          transformGroup: 'css',
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
          transformGroup: 'scss',
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
