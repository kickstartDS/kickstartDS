const path = require('path');
const StyleDictionary = require('style-dictionary');
const createDictionary = require('../design-tokens');

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

createDictionary(StyleDictionary)
  .extend(config)
  .buildPlatform('css')
  .buildPlatform('jsx')
  .buildPlatform('storybook');
