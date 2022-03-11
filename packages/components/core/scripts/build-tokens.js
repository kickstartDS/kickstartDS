const path = require('path');
const StyleDictionary = require('style-dictionary');
const kdsConfig = require('../design-tokens');

const config = {
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
};

StyleDictionary.extend(kdsConfig())
  .extend(config)
  .buildPlatform('css')
  .buildPlatform('jsx')
  .buildPlatform('storybook');
