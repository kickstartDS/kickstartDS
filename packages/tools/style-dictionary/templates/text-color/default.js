const Color = require('tinycolor2');

const token = (value) => ({
  value: typeof value === 'string' ? value : Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Text Default', presenter: 'Color' },
});

module.exports = () => ({
  default: {
    base: token('{ks.color.fg.base}'),
    interactive: {
      base: token('{ks.color.link.base}'),
      hover: { base: token('{ks.color.link.base}') },
      active: { base: token('{ks.color.link.base}') },
      selected: { base: token('{ks.color.link.base}') },
    },
  },
  'default-inverted': {
    base: token('{ks.color.fg-inverted.base}'),
    interactive: {
      base: token('{ks.color.link-inverted.base}'),
      hover: { base: token('{ks.color.link-inverted.base}') },
      active: { base: token('{ks.color.link-inverted.base}') },
      selected: { base: token('{ks.color.link-inverted.base}') },
    },
  },
});
