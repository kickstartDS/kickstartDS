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

    return config;
  },
};
