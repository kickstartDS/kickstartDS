/* eslint-disable import/no-extraneous-dependencies, no-underscore-dangle */
import path from 'path';
import { fileURLToPath } from 'url';
import StyleDictionary from 'style-dictionary';
import _ from 'lodash';
import { config, createTokens } from '@kickstartds/style-dictionary';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

StyleDictionary.extend(config)
  .extend({
    source: [path.join(__dirname, '../source/design-tokens/icons/*.svg')],
    tokens: _.merge(...createTokens().map(([, tokens]) => tokens)),
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
