const path = require('path');

module.exports = {
  stories: [
    `../tmp/blog/**/*.stories.@(tsx|mdx)`,
    `../tmp/blog/**/*.story.mdx`,
    `../source/*.stories.@(mdx)`,
  ],
  features: {
    postcss: false,
  },
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
    '@whitespace/storybook-addon-html',
    'storybook-dark-mode',
    // 'storybook-design-token',
  ],
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
