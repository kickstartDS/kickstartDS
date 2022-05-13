const Color = require('tinycolor2');

const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Interface', presenter: 'Color' },
});

module.exports = ({ color }) => ({
  interface: {
    base: token('{ks.color.fg.alpha.1.base}'),
    interactive: {
      base: token(Color(color.foreground).setAlpha(0).toRgb()),
      disabled: { base: token('{ks.color.fg.alpha.1.base}') },
      hover: { base: token('{ks.color.fg.alpha.1.base}') },
      active: { base: token('{ks.color.fg.alpha.1.base}') },
    },
  },
  'interface-inverted': {
    base: token('{ks.color.fg-inverted.alpha.1.base}'),
    interactive: {
      base: token(Color(color.background).setAlpha(0).toRgb()),
      disabled: { base: token('{ks.color.fg-inverted.alpha.1.base}') },
      hover: { base: token('{ks.color.fg-inverted.alpha.1.base}') },
      active: { base: token('{ks.color.fg-inverted.alpha.1.base}') },
    },
  },
});
