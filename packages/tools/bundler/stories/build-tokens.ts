import path from 'path';
import StyleDictionary from 'style-dictionary';
import merge from 'lodash/merge.js';
import { config, createTokens } from '@kickstartds/style-dictionary';

const corePath = path.dirname(
  require.resolve('@kickstartds/core/package.json')
);

const buildTokens = (): void => {
  StyleDictionary.extend(config)
    .extend({
      source: [`${corePath}/source/design-tokens/icons/*.svg`],
      tokens: merge({}, ...createTokens().map(([, tokens]) => tokens)),
      platforms: {
        jsx: {
          buildPath: path.join(__dirname, '../storybook-tmp/'),
        },
        storybook: {
          buildPath: '.storybook/tokens/',
        },
      },
    })
    .buildPlatform('jsx')
    .buildPlatform('storybook');
};

export default buildTokens;
