import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    `${process.env.KDS_MODULES_GLOB}/{lib/**,storybook-tmp}/*.@(stories.ts|mdx)`,
    `${process.env.KDS_MODULES_GLOB}/source/**/*.mdx`,
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    '@kickstartds/storybook-addon-component-tokens',
    '@kickstartds/storybook-addon-html',
    '@kickstartds/storybook-addon-jsonschema',
    {
      name: 'storybook-design-token',
      options: {
        designTokenGlob: '.storybook/tokens/*.{css,svg}',
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  core: {
    disableTelemetry: true,
  },
};

export default config;
