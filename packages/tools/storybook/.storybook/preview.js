import '@storybook/react';
import { createElement, Fragment, useEffect, useMemo } from 'react';
import { actions } from '@storybook/addon-actions';
import { useDarkMode } from 'storybook-dark-mode';
// @see https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/attrchange
import 'lazysizes/plugins/attrchange/ls.attrchange';
import { unpackDecorator } from '../../../components/core/lib/storybook/helpers';
import IconSprite from '../tmp-tokens/IconSprite';

import '../../../components/core/lib/design-tokens/tokens.css';
import '../../../components/base/lib/global/base.js';
import '../../../components/base/lib/global/base.css';

import designTokens from '!!raw-loader!../tmp-tokens/tokens.css';
import icons from '!!raw-loader!../tmp-tokens/icons.svg';

const myActions = actions('radio');
window._ks.radio.on('*', myActions.radio);

const InvertedDecorator = (Story, context) => {
  const darkMode = useDarkMode();
  const bgValues = useMemo(
    () =>
      Object.fromEntries(
        context.parameters.backgrounds.values.map(({ name, value }) => [
          value,
          name,
        ])
      ),
    context.parameters.backgrounds.values
  );
  const background =
    bgValues[context.globals.backgrounds?.value] ??
    (darkMode ? 'dark' : 'light');

  useEffect(
    () => document.body.setAttribute('ks-inverted', background === 'dark'),
    [background]
  );
  return createElement(Story);
};

const PageDecorator = (Story) =>
  createElement(Fragment, null, [
    createElement(IconSprite, { key: 'IconSprite' }),
    createElement(Story, { key: 'Story' }),
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
export const decorators = [unpackDecorator, InvertedDecorator, PageDecorator];
