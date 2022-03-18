const path = require('path');
const StyleDictionary = require('style-dictionary');
const { config, createTokens } = require('../design-tokens');

StyleDictionary.extend(config)
  .extend({
    tokens: createTokens(),
    platforms: {
      css: {
        buildPath: 'lib/design-tokens/',
      },
      jsx: {
        buildPath: path.join(__dirname, '../../../tools/storybook/.storybook/'),
      },
      storybook: {
        buildPath: path.join(__dirname, '../../../tools/storybook/.storybook/'),
      },
    },
  })
  .buildPlatform('css')
  .buildPlatform('jsx')
  .buildPlatform('storybook');
