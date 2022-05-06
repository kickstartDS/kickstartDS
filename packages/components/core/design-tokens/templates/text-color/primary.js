const Color = require('tinycolor2');

const token = (value) => ({
  value: typeof value === 'string' ? value : Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Text Primary', presenter: 'Color' },
});

module.exports = ({ color }) => ({
  primary: {
    _: token('{ks.color.primary._}'),
    inverted: {
      _: token(color.background),
      interactive: {
        _: token(color.background),
        hover: token(color.background),
        active: token(color.background),
      },
    },
    interactive: {
      _: token('{ks.color.primary._}'),
      hover: token('{ks.color.primary._}'),
      active: token('{ks.color.primary._}'),
      visited: token('{ks.color.primary._}'),
    },
  },
});
