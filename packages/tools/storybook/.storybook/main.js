const path = require('path');

module.exports = {
  stories: [
    `../tmp/**/*.stories.@(tsx|mdx)`,
    `../tmp/**/*.story.mdx`,
    `../source/*.stories.@(mdx)`,
  ],
  features: {
    postcss: false,
  },
  addons: [
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    // 'storybook-design-token',
  ],
  core: {
    builder: 'storybook-builder-vite',
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve('./'),
      path.resolve('./packages'),
    ];

    config.devtool = false;

    // Return the altered config
    return config;
  },
};
