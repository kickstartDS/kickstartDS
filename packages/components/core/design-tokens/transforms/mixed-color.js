const Color = require('tinycolor2');

module.exports = {
  name: 'mixed-color/css',
  type: 'value',
  transitive: true,
  matcher(token) {
    return token.attributes.category === 'mixed-color';
  },
  transformer(token) {
    const color = Color.mix(...token.value);
    return color.getAlpha() === 1 ? color.toHexString() : color.toRgbString();
  },
};
