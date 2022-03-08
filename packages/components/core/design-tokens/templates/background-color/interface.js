const Color = require('tinycolor2');
const token = (value) => ({
  value: Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Interface', presenter: 'Color' },
});

module.exports = ({ color }) => ({
  _: token(Color(color.foreground).setAlpha(0.1)),
  interactive: {
    _: token(Color(color.foreground).setAlpha(0)),
    disabled: token(Color(color.foreground).setAlpha(0.1)),
  },
});
