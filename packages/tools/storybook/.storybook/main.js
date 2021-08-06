const { root } = require('../scripts/utils');

module.exports = {
  stories: [
    `${root}/packages/components/${process.env.KDS_MODULES}/lib/**/*.stories.@(js|mdx)`,
    `../tmp/**/*.story.@(mdx)`,
  ],
  features: {
    postcss: false,
  },
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-essentials',
    '@kickstartds/storybook-addon-component-tokens',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
  ],
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config, { configType }) {
    config.esbuild = { jsxInject: `import React from 'react'` };
    config.base = '';
    config.optimizeDeps?.include.push('react-dom/server');
    config.define = { 'process.env': process.env };
    return config;
  },
};
