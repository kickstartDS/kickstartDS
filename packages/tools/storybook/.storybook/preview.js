import '@storybook/react';
import { actions } from '@storybook/addon-actions';
// @see https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/attrchange
import 'lazysizes/plugins/attrchange/ls.attrchange';
import { unpackDecorator } from '../../../components/core/lib/storybook/helpers';

import '../../../components/base/lib/global/base.js';
import '../../../components/base/lib/global/base.css';
import designTokens from '../../../components/core/lib/design-tokens/tokens.css';
import icons from './icons.html?raw';

const myActions = actions('radio');
window.rm.radio.on('*', myActions.radio);

export const parameters = {
  options: {
    storySort(a, b) {
      if (a[0].includes('docs-')) {
        if (a[0].includes('intro-')) {
          return -1;
        }
      }

      if (a[0].includes('design-tokens-')) {
        return -1;
      }

      if (a[0].includes('-changelog-')) {
        return b - a;
      }

      // alphabetically
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, 'en', { numeric: true });
    },
  },
  designToken: {
    files: [
      {
        filename: '../../../components/core/lib/design-tokens/tokens.css',
        content: designTokens,
      },
      {
        filename: './icons.svg',
        content: icons,
      },
    ],
  },
};

export const decorators = [unpackDecorator];
