const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Interface', presenter: 'Color' },
});

module.exports = () => ({
  interface: {
    base: token('{ks.color.fg.alpha.1.base}'),
    interactive: {
      base: token('{ks.color.transparent.base}'),
      disabled: { base: token('{ks.color.fg.alpha.1.base}') },
      hover: { base: token('{ks.color.fg.alpha.1.base}') },
      active: { base: token('{ks.color.fg.alpha.1.base}') },
    },
  },
  'interface-inverted': {
    base: token('{ks.color.fg-inverted.alpha.1.base}'),
    interactive: {
      base: token('{ks.color.transparent.base}'),
      disabled: { base: token('{ks.color.fg-inverted.alpha.1.base}') },
      hover: { base: token('{ks.color.fg-inverted.alpha.1.base}') },
      active: { base: token('{ks.color.fg-inverted.alpha.1.base}') },
    },
  },
});
