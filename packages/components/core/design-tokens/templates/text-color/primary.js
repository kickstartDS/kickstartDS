const Color = require('tinycolor2');

const token = (value) => ({
  value: Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Text Primary', presenter: 'Color' },
});

module.exports = ({ color }) => ({
  primary: {
    _: token(color.primary),
    inverted: {
      _: token(color.background),
      interactive: {
        _: token(color.background),
        hover: token(color.background),
        active: token(color.background),
      },
    },
    interactive: {
      _: token(color.primary),
      hover: token(color.primary),
      active: token(color.primary),
      visited: token(color.primary),
    },
  },
});
