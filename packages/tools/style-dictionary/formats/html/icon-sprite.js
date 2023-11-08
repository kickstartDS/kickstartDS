const svgstore = require('svgstore');

module.exports = {
  name: 'html/icon-sprite',
  formatter({ dictionary, options }) {
    const { prefix = 'icon-' } = options;
    const sprite = svgstore({
      svgAttrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        'xmlns:xlink': 'http://www.w3.org/1999/xlink',
        hidden: 'hidden',
        height: '0',
        width: '0',
      },
    });

    Object.entries(dictionary.tokens.icons).forEach(([name, { value }]) => {
      sprite.add(prefix + name, value);
    });

    return sprite.toString({ inline: true });
  },
};
