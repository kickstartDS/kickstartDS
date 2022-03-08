const Color = require('tinycolor2');
const token = (value) => ({
  value: Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Accent', presenter: 'Color' },
});

module.exports = ({ color }) => ({
  _: token(Color(color.primary).setAlpha(0.1)),
});
