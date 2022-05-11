const Color = require('tinycolor2');

const token = (value) => ({
  value: typeof value === 'string' ? value : Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Clear', presenter: 'Color' },
});

module.exports = ({ color }) => ({
  clear: {
    interactive: {
      _: token(Color(color.background).setAlpha(0)),
      hover: token('{ks.color.primary.alpha.2}'),
      active: token('{ks.color.primary.alpha.3}'),
    },
  },
  'clear-inverted': {
    interactive: {
      _: token(Color(color.background).setAlpha(0)),
      hover: token('{ks.color.primary.alpha.3}'),
      active: token('{ks.color.primary.alpha.4}'),
    },
  },
});
