const Color = require('tinycolor2');

const token = (value) => ({
  value: Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Accent', presenter: 'Color' },
});

module.exports = ({ color }) => ({
  accent: token(Color.mix(color.primary, color.background, 90).desaturate(25)),
  'accent-inverted': token(
    Color.mix(color['primary-inverted'], color.foreground, 80)
      .desaturate(25)
      .setAlpha(0.7)
  ),
});
