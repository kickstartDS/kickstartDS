const Color = require('tinycolor2');

const token = (value) => ({
  value: Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Default', presenter: 'Color' },
});

module.exports = ({ color }) => ({
  default: {
    _: token(color.background),
    inverted: token(Color(color.foreground).setAlpha(0.7)),
  },
});
