import '@storybook/react';
import { themes } from '@storybook/theming';
// @see https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/attrchange
import 'lazysizes/plugins/attrchange/ls.attrchange';
// TODO this probably needs a type?
import { DocsContainer } from './components/DocContainer';

import '../../../@rm-frontend/base/lib/global';
import '../../../@rm-frontend/base/lib/global/design-tokens.css';

// TODO this probably needs to be done differently in the future (no more -instance), and in instances right now
const tokenContextComponents = require.context(
  '!!raw-loader!../../../@rm-frontend/base/lib/global/',
  true,
  /.\.(css)$/
);

const tokenFilesComponents = tokenContextComponents
  .keys()
  .map(function (filename) {
    return {
      filename: filename,
      content: tokenContextComponents(filename).default,
    };
  });

// const tokenContextTmp = require.context(
//   '!!raw-loader!../tmp/',
//   true,
//   /.\.(svg)$/
// );

// const tokenFilesTmp = tokenContextTmp.keys().map(function (filename) {
//   return { filename: filename, content: tokenContextTmp(filename).default };
// });

const tokenContextIcons = require.context(
  '!!raw-loader!../../../@rm-frontend/instance/source/icons',
  true,
  /.\.(svg)$/
);

const tokenFilesIcons = tokenContextIcons.keys().map(function (filename) {
  return { filename: filename, content: tokenContextIcons(filename).default };
});

const tokenFiles = [
  // ...tokenFilesTmp,
  ...tokenFilesIcons,
  ...tokenFilesComponents,
];

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
  docs: {
    container: DocsContainer,
  },
  darkMode: {
    dark: { ...themes.dark },
    light: { ...themes.normal },
    stylePreview: true,
  },
  designToken: {
    files: tokenFiles,
  },
};
