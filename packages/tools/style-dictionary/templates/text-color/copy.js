const Color = require('tinycolor2');

const token = (value) => ({
  value: typeof value === 'string' ? value : Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: 'Colors: Text Copy', presenter: 'Color' },
});

module.exports = () => ({
  copy: {
    base: token('{ks.color.fg.alpha.3.base}'),
    interactive: {
      base: token('{ks.color.link.base}'),
      hover: { base: token('{ks.color.link.to-fg.2.base}') },
      active: { base: token('{ks.color.link.to-fg.3.base}') },
      selected: { base: token('{ks.color.link.to-fg.3.base}') },
    },
  },
  'copy-inverted': {
    base: token('{ks.color.fg-inverted.alpha.3.base}'),
    interactive: {
      base: token('{ks.color.link-inverted.base}'),
      hover: { base: token('{ks.color.link-inverted.to-fg.2.base}') },
      active: { base: token('{ks.color.link-inverted.to-fg.2.base}') },
      selected: { base: token('{ks.color.link-inverted.to-fg.2.base}') },
    },
  },
});
