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
    'storybook-dark-mode',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@kickstartds/storybook-addon-component-tokens',
  ],
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config, { configType }) {
    config.esbuild = { jsxInject: `import React from 'react'` };
    config.base = '';
    return config;
  },
};
