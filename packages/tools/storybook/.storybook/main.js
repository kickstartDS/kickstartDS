const { root } = require('../scripts/utils');

module.exports = {
  framework: '@storybook/react',
  stories: [
    `${root}/packages/components/${process.env.KDS_MODULES}/lib/**/*.stories.@(js|mdx)`,
    `../tmp/**/*.story.@(mdx)`,
  ],
  staticDirs: ['../../../../legacy-instance'],
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-essentials',
    '@kickstartds/storybook-addon-component-tokens',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
  ],
};
