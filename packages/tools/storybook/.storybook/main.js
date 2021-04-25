const commonjs = require('@rollup/plugin-commonjs');

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

    if (configType === 'PRODUCTION') {
      config.plugins.unshift(commonjs());
    }

    return config;
  },
};
