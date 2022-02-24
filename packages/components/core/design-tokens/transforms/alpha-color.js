const Color = require('tinycolor2');

module.exports = {
  name: 'alpha-color/css',
  type: 'value',
  transitive: true,
  matcher(token) {
    return token.attributes.category === 'alpha-color';
  },
  transformer(token) {
    const [color1, alpha] = token.value;
    const color = Color(color1).setAlpha(alpha);
    return color.getAlpha() === 1 ? color.toHexString() : color.toRgbString();
  },
};
