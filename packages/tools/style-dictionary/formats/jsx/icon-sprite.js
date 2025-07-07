const { parse } = require('svg-parser');
const toJsx = require('@mapbox/hast-util-to-jsx');
const babel = require('@babel/core');
const htmlIconSpriteFormat = require('../html/icon-sprite');

module.exports = {
  name: 'jsx/icon-sprite',
  formatter({ dictionary, options }) {
    const html = htmlIconSpriteFormat.formatter({ dictionary, options });
    const tree = parse(html);
    const jsx = toJsx(tree);
    return babel.transformSync(`export default () => (${jsx})`, {
      presets: [
        [require.resolve('@babel/preset-react'), { runtime: 'automatic' }],
      ],
    }).code;
  },
};
