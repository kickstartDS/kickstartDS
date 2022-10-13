const json = require('@rollup/plugin-json');
const { externals } = require('rollup-plugin-node-externals');
const { terser } = require('rollup-plugin-terser');
const importResolver = require('rollup-plugin-import-resolver');
const mergeWith = require('lodash/mergeWith');

const production = process.env.NODE_ENV === 'production';
function customizer(objValue, srcValue) {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

module.exports = {
  sharedInputPlugins: [
    json(),
    externals(),
    importResolver({
      extensions: ['.js', '.ts', '.tsx'],
    }),
  ],
  sharedOutputOptions: {
    dir: 'lib',
    format: 'es',
    chunkFileNames: '_shared/[name]-[hash].js',
    plugins: [
      production &&
        terser({
          safari10: true,
          keep_classnames: true,
          module: true,
          compress: {
            // quickfix to work around a swc bug: https://github.com/swc-project/swc/issues/5608
            join_vars: false,
          },
        }),
    ],
  },
  sharedBabelConfig: (config = {}) =>
    mergeWith(
      {
        babelrc: false,
        assumptions: {
          // https://babeljs.io/docs/en/assumptions
          constantReexports: true,
          constantSuper: true,
          enumerableModuleMeta: true,
          ignoreFunctionLength: true,
          ignoreToPrimitiveHint: true,
          mutableTemplateObject: true,
          noClassCalls: true,
          noDocumentAll: true,
          noIncompleteNsImportDetection: true,
          noNewArrows: true,
          setComputedProperties: true,
        },
        presets: [
          ['@babel/preset-env', { bugfixes: true }],
          ['@babel/preset-typescript'],
        ],
        plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
      },
      config,
      customizer
    ),
};
