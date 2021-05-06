const json = require('@rollup/plugin-json');
const externals = require('rollup-plugin-node-externals');
const { terser } = require('rollup-plugin-terser');
const importResolver = require('rollup-plugin-import-resolver');

const production = process.env.NODE_ENV === 'production';

module.exports = {
  sharedInputPlugins: [
    json(),
    externals({ deps: true }),
    importResolver({
      extensions: ['.js', '.ts', '.tsx'],
    }),
  ],
  sharedOutputOptions: {
    dir: 'lib',
    format: 'es',
    chunkFileNames: '_shared/[name]-[hash].js',
    plugins: [production && terser({ safari10: true })],
  },
  sharedBabelConfig: {
    babelrc: false,
    presets: [
      ['@babel/preset-env', { bugfixes: true }],
      ['@babel/preset-typescript'],
    ],
    plugins: [
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-transform-runtime', { useESModules: true }],
    ],
  },
};
