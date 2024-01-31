const { parse } = require('node-html-parser');

module.exports = {
  name: 'storybook/icons',
  formatter({ dictionary }) {
    return Object.entries(dictionary.tokens.icons)
      .map(([name, { value }]) => {
        const root = parse(value);
        root.firstChild.setAttribute('data-token-name', name);
        root.firstChild.setAttribute('fill', 'currentColor');
        return root.toString();
      })
      .join('\n');
  },
};
