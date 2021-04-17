const json = require('@rollup/plugin-json');
const externals = require('rollup-plugin-node-externals');

module.exports = {
  sharedInputPlugins: [json(), externals({ deps: true })],
  sharedOutputOptions: {
    dir: 'lib',
    format: 'es',
    chunkFileNames: '_shared/[name]-[hash].js',
  },
  sharedBabelConfig: {
    babelrc: false,
    presets: ['@babel/modules', '@babel/preset-typescript'],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 3,
          version: '^7.13.10', // this must match the version of `@babel/runtime-corejs3` in components dependencies
        },
      ],
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
    ],
  },
};
