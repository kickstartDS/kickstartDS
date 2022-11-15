/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const StyleDictionary = require('style-dictionary');
const merge = require('lodash/merge');
const { config, createTokens } = require('@kickstartds/style-dictionary');

const corePath = path.dirname(
  require.resolve('@kickstartds/core/package.json')
);

module.exports = () =>
  StyleDictionary.extend(config)
    .extend({
      source: [`${corePath}/source/design-tokens/icons/*.svg`],
      tokens: merge(...createTokens().map(([, tokens]) => tokens)),
      platforms: {
        jsx: {
          buildPath: path.join(__dirname, '../storybook-tmp/'),
        },
        storybook: {
          buildPath: path.join(__dirname, '../storybook-tmp/'),
        },
      },
    })
    .buildPlatform('jsx')
    .buildPlatform('storybook');
