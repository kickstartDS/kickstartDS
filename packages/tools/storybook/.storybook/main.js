const { root } = require('../scripts/utils');

module.exports = {
  stories: [
    `${root}/packages/components/*/lib/**/*.stories.@(js)`,
    `../tmp/**/*.story.@(mdx)`,
  ],
  features: {
    postcss: false,
  },
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-performance',
    '@storybook/addon-a11y',
  ],
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config, { configType }) {
    config.esbuild = { jsxInject: `import React from 'react'` };
    return config;
  },
};
