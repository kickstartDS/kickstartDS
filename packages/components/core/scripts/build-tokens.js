/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const StyleDictionary = require('style-dictionary');
const merge = require('lodash/merge');
const { config, createTokens } = require('@kickstartds/style-dictionary');

StyleDictionary.extend(config)
  .extend({
    source: [path.join(__dirname, '../source/design-tokens/icons/*.svg')],
    tokens: merge(...createTokens().map(([, tokens]) => tokens)),
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
