const Color = require('tinycolor2');

const token = (value) => ({
  value: Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Text Interface', presenter: 'Color' },
});

module.exports = ({ color }) => ({
  interface: {
    _: token(Color(color.foreground).setAlpha(0.8)),
    interactive: {
      _: token(color.foreground),
    },
  },
});
