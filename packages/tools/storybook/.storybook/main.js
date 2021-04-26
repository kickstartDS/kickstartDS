// const commonjs = require('@rollup/plugin-commonjs');
// const resolve = require('@rollup/plugin-node-resolve').nodeResolve;
// const optimizeLodashImports = require('@optimize-lodash/rollup-plugin').optimizeLodashImports;

module.exports = {
  stories: [
    `../tmp/**/*.stories.@(tsx|mdx)`,
    `../tmp/**/*.story.@(mdx)`,
    `../source/*.stories.@(mdx)`,
  ],
  features: {
    postcss: false,
  },
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config, { configType }) {
    config.esbuild = { jsxInject: `import React from 'react'` };
    /*config.optimizeDeps = { include: [
      'core-js-pure',
      '@babel/runtime-corejs3',
      'core-js-pure/features/object/get-own-property-symbols.js?commonjs-proxy',
      'core-js-pure/features/object/get-own-property-symbols.js?commonjs-require',
      'core-js-pure/features/object/get-own-property-symbols.js',
      '@babel/runtime-corejs3/core-js/object/get-own-property-symbols.js',
    ], auto: true };*/

    /*if (configType === 'PRODUCTION') {
      config.plugins.unshift(optimizeLodashImports());
      config.plugins.unshift(commonjs());
      config.plugins.unshift(resolve());
    }*/

    return config;
  },
};
