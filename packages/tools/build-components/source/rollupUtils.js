const json = require('@rollup/plugin-json');
const { externals } = require('rollup-plugin-node-externals');
const importResolver = require('rollup-plugin-import-resolver');

module.exports = {
  plugins: [
    json(),
    externals(),
    importResolver({
      extensions: ['.js', '.ts', '.tsx'],
    }),
  ],
  babelConfig: {
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
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
  },
};
