import { actions } from '@storybook/addon-actions';
import { Preview } from '@storybook/react';
import { createPageDecorator } from '@kickstartds/bundler/stories/createPageDecorator';
import { InvertedDecorator } from '@kickstartds/bundler/stories/InvertedDecorator';
// @see https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/attrchange
import 'lazysizes/plugins/attrchange/ls.attrchange';
import { unpackDecorator } from '@kickstartds/core/lib/storybook';
import IconSprite from '../storybook-tmp/IconSprite';

import '@kickstartds/core/lib/design-tokens/tokens.css';
import '@kickstartds/base/lib/global/base.js';
import '@kickstartds/core/lib/utils/window.js';
import '@kickstartds/base/lib/global/base.css';
import './preview.css';

const myActions = actions('radio');
window._ks.radio.on('*', myActions.radio);

const preview: Preview = {
  parameters: {
    options: {
      storySort: (a, b) => {
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
      disable: true,
    },
    jsonschema: {
      packArgs: true,
    },
    html: {
      decorators: [unpackDecorator],
    },
  },
  decorators: [
    unpackDecorator,
    InvertedDecorator,
    createPageDecorator(IconSprite),
  ],
};

export default preview;
