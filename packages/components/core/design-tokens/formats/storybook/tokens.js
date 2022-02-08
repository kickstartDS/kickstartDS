/* eslint-disable consistent-return */
/* eslint-disable prefer-template */
/* eslint-disable array-callback-return */
const { formatHelpers } = require('style-dictionary');
const postcss = require('postcss');
const calc = require('postcss-calc');

const { fileHeader, createPropertyFormatter } = formatHelpers;
const presenterMap = {
  color: 'Color',
  'font-family': 'FontFamily',
  'font-size': 'FontSize',
  'line-height': 'LineHeight',
  'font-weight': 'FontWeight',
  size: 'Spacing',
};

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
          const { token, attributes } = prop;
          if (token?.category) {
            const presenter =
              token.presenter || presenterMap[attributes?.category];
            return (
              `  /**\n   * @tokens ${token.category}\n   * @presenter ${presenter}\n   */\n` +
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
