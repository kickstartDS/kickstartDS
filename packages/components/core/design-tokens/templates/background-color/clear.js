const Color = require('tinycolor2');

const token = (value) => ({
  value: typeof value === 'string' ? value : Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Clear', presenter: 'Color' },
});

module.exports = ({ color }) => ({
  clear: {
    interactive: {
      base: token(Color(color.primary).setAlpha(0)),
      hover: { base: token('{ks.color.primary.alpha.2.base}') },
      active: { base: token('{ks.color.primary.alpha.3.base}') },
    },
  },
  'clear-inverted': {
    interactive: {
      base: token(Color(color['primary-inverted']).setAlpha(0)),
      hover: { base: token('{ks.color.primary-inverted.alpha.3.base}') },
      active: { base: token('{ks.color.primary-inverted.alpha.4.base}') },
    },
  },
});
