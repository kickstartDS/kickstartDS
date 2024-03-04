const Color = require('tinycolor2');

const token = (value) => ({
  value: typeof value === 'string' ? value : Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Text Display', presenter: 'Color' },
});

module.exports = () => ({
  display: {
    base: token('{ks.color.fg.base}'),
    interactive: {
      base: token('{ks.color.link.base}'),
      hover: { base: token('{ks.color.link.to-fg.2.base}') },
      active: { base: token('{ks.color.link.to-fg.3.base}') },
      selected: { base: token('{ks.color.link.to-fg.3.base}') },
    },
  },
  'display-inverted': {
    base: token('{ks.color.fg-inverted.base}'),
    interactive: {
      base: token('{ks.color.link-inverted.base}'),
      hover: { base: token('{ks.color.link-inverted.to-fg.2.base}') },
      active: { base: token('{ks.color.link-inverted.to-fg.2.base}') },
      selected: { base: token('{ks.color.link-inverted.to-fg.2.base}') },
    },
  },
});
