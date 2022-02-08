const HTMLtoJSX = require('htmltojsx');
const htmlIconSpriteFormat = require('../html/icon-sprite');

module.exports = {
  name: 'jsx/icon-sprite',
  formatter({ dictionary, options }) {
    const converter = new HTMLtoJSX({ createClass: false });
    const html = htmlIconSpriteFormat.formatter({ dictionary, options });

    return `export default () => (${converter.convert(html)})`;
  },
};
