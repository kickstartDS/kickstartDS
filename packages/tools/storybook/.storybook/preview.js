import '@storybook/react';
import { createElement, Fragment } from 'react';
import { actions } from '@storybook/addon-actions';
// @see https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/attrchange
import 'lazysizes/plugins/attrchange/ls.attrchange';
import { unpackDecorator } from '../../../components/core/lib/storybook/helpers';
import IconSprite from './IconSprite';
import { LightBox } from '../../../components/base/lib/lightbox';

import '../../../components/core/lib/design-tokens/tokens.css';
import '../../../components/base/lib/global/base.js';
import '../../../components/base/lib/global/base.css';
import '../../../components/base/lib/lightbox/lazyLightbox.js';
import '../../../components/base/lib/lightbox/lightbox.css';

import designTokens from '!!raw-loader!./tokens.css';
import icons from '!!raw-loader!./icons.html';

const myActions = actions('radio');
window.rm.radio.on('*', myActions.radio);

const PageDecorator = (Story) =>
  createElement(Fragment, null, [
    createElement(IconSprite, { key: '1' }),
    createElement(Story, { key: '2' }),
    createElement(LightBox, { key: '3' }),
  ]);

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
        filename: './tokens.css',
        content: designTokens,
      },
      {
        filename: './icons.svg',
        content: icons,
      },
    ],
  },
};
export const decorators = [unpackDecorator, PageDecorator];
