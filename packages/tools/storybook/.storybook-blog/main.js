module.exports = {
  stories: [
    `../tmp/blog/**/*.stories.@(tsx|mdx)`,
    `../tmp/blog/**/*.story.mdx`,
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
