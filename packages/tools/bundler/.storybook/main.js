module.exports = {
  framework: '@storybook/react',
  stories: [
    `${process.env.KDS_MODULES_GLOB}/{lib/**,storybook-tmp}/*.stor(ies|y).@(js|mdx)`,
  ],
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-essentials',
    '@kickstartds/storybook-addon-component-tokens',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
    {
      name: 'storybook-design-token',
      options: {
        designTokenGlob: '.storybook/tokens/*.{css,svg}',
      },
    },
  ],
  features: {
    postcss: false,
  },
  async webpackFinal(config) {
    const babelRuleIndex = config.module.rules.findIndex((rule) =>
      rule?.use?.some((u) => u?.loader.includes('babel-loader'))
    );

    config.module.rules[babelRuleIndex].exclude =
      /node_modules\/(?!(@kickstartds\/))/;

    return config;
  },
};
