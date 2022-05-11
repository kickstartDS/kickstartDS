const Color = require('tinycolor2');

const token = (value) => ({
  value: Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Text Default', presenter: 'Color' },
});

module.exports = ({ color }) => ({
  default: {
    _: token(color.foreground),
    interactive: {
      _: token(color.link),
      hover: token(color.link),
      active: token(color.link),
      visited: token(color.link),
    },
  },
  'default-inverted': token(color.background),
});
