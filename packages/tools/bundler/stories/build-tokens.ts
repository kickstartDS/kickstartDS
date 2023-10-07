import path from 'node:path';
import { fileURLToPath } from 'node:url';
import StyleDictionary from 'style-dictionary';
import merge from 'lodash/merge.js';
import { resolve } from 'import-meta-resolve';
import { config, createTokens } from '@kickstartds/style-dictionary';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const corePath = path.dirname(
  fileURLToPath(resolve('@kickstartds/core/package.json', import.meta.url))
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
