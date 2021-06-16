import '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { withPerformance } from 'storybook-addon-performance';
// @see https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/attrchange
import 'lazysizes/plugins/attrchange/ls.attrchange';
import { unpackDecorator } from '@kickstartds/core/lib/storybook/helpers';

import '@kickstartds/base/lib/global/base.js';
import '@kickstartds/base/lib/global/base.css';
import '@kickstartds/core/lib/design-tokens/tokens.css';

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

      if (a[0].includes('-changelog-')) {
        return b - a;
      }

      // alphabetically
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, 'de', { numeric: true });
    },
  },
};

export const decorators = [unpackDecorator, withPerformance];
