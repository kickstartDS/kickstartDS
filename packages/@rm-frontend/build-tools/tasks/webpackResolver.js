const path = require('path');
const rmConfig = require('./rmConfig');

// this config is usead by webpack and eslint
module.exports = {
  resolve: {
    alias: {
      '~instance': path.resolve(rmConfig.instancepath, 'source'),
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.css'],
  },

  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'node_modules')],
  },
};
