module.exports = {
  stories: [
    `../tmp/base/**/*.stories.@(tsx|mdx)`,
    `../tmp/base/**/*.story.mdx`,
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

    return config;
  },
};
