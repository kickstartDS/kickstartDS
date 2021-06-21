const { root } = require('../scripts/utils');

module.exports = {
  stories: [
    `${root}/packages/components/${process.env.KDS_MODULES}/lib/**/*.stories.@(js)`,
    `../tmp/**/*.story.@(mdx)`,
  ],
  features: {
    postcss: false,
  },
  addons: [
    'storybook-addon-themes',
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
