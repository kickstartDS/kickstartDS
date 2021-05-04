const path = require('path');
const config = require('./packages/tools/eslint-config/index.js');

module.exports = {
  extends: './packages/tools/eslint-config/index.js',
  settings: {
    'import/resolver': {
      ...config.settings['import/resolver'],
      'eslint-import-resolver-lerna': {
        packages: path.resolve(__dirname, 'packages/components'),
      },
    },
  },
};
