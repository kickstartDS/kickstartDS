/* eslint-disable consistent-return */
/* eslint-disable prefer-template */
/* eslint-disable array-callback-return */
const { formatHelpers } = require('style-dictionary');
const postcss = require('postcss');
const calc = require('postcss-calc');

const { fileHeader, createPropertyFormatter } = formatHelpers;

module.exports = {
  name: 'storybook/tokens',
  formatter({ dictionary, options, file }) {
    const { selector = ':root' } = options;
    const { allTokens } = dictionary;

    const defaultCssFormater = createPropertyFormatter({
      outputReferences: false,
      dictionary,
      format: 'css',
      formatting: {},
    });

    const css =
      `${selector} {\n` +
      allTokens
        .map((prop) => {
          const { token } = prop;
          if (token?.category) {
            prop.name = prop.name.replace(/-base$/, '');
            return (
              `  /**\n   * @tokens ${token.category}\n   * @presenter ${token.presenter}\n   */\n` +
              defaultCssFormater(prop)
            );
          }
        })
        .filter(Boolean)
        .join('\n') +
      `\n}\n`;

    return fileHeader({ file }) + postcss().use(calc()).process(css).css;
  },
};
