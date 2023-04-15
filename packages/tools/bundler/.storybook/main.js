module.exports = {
  stories: [
    // `${process.env.KDS_MODULES_GLOB}/{lib/**,storybook-tmp}/*.stor(ies|y).@(js|mdx)`,
    `${process.env.KDS_MODULES_GLOB}/{lib/**,storybook-tmp}/*.@(stories.js|stories.ts|mdx)`,
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    // '@kickstartds/storybook-addon-component-tokens',
    '@whitespace/storybook-addon-html',
    // "@kickstartds/storybook-addon-jsonschema",
    {
      name: 'storybook-design-token',
      options: {
        designTokenGlob: `../../tools/bundler/storybook-tmp/*.@(css|svg)`,
      },
    },
    '@storybook/addon-mdx-gfm',
  ],
  features: {
    postcss: false,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
