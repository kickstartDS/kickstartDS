const HTMLtoJSX = require('htmltojsx');
const babel = require('@babel/core');
const htmlIconSpriteFormat = require('../html/icon-sprite');

module.exports = {
  name: 'jsx/icon-sprite',
  formatter({ dictionary, options }) {
    const converter = new HTMLtoJSX({ createClass: false });
    const html = htmlIconSpriteFormat.formatter({ dictionary, options });
    return babel.transformSync(
      `export default () => (${converter.convert(html)})`,
      {
        presets: [
          [require.resolve('@babel/preset-react'), { runtime: 'automatic' }],
        ],
      }
    ).code;
  },
};
