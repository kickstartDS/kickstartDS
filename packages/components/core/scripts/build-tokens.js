// eslint-disable-next-line import/no-extraneous-dependencies
const StyleDictionary = require('style-dictionary');
const createDictionary = require('../design-tokens');

const config = {
  platforms: {
    css: {
      buildPath: 'source/design-tokens/',
    },
    jsx: {
      buildPath: '../../../tools/storybook/.storybook/',
    },
    storybook: {
      buildPath: '../../../tools/storybook/.storybook/',
    },
  },
};

createDictionary(StyleDictionary)
  .extend(config)
  .buildPlatform('css')
  .buildPlatform('jsx')
  .buildPlatform('storybook');
