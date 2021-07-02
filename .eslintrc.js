const path = require('path');
const config = require('@kickstartds/eslint-config');

module.exports = {
  extends: '@kickstartds/eslint-config',
  settings: {
    'import/resolver': {
      ...config.settings['import/resolver'],
      'eslint-import-resolver-lerna': {
        packages: path.resolve(__dirname, 'packages/components'),
      },
    },
  },
};
