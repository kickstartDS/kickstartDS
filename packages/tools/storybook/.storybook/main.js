const fg = require('fast-glob');
const { root } = require('../scripts/utils');

module.exports = {
  framework: '@storybook/react',
  async stories(list) {
    const stories = await fg(
      `packages/components/${process.env.KDS_MODULES}/lib/**/*.stories.@(js|mdx)`,
      {
        cwd: root,
        absolute: true,
      }
    );
    return [...list, ...stories, `../tmp/**/*.story.mdx`];
  },
  staticDirs: [`${root}/legacy-instance`],
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-essentials',
    '@kickstartds/storybook-addon-component-tokens',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
  ],
  features: {
    postcss: false,
  },
};
