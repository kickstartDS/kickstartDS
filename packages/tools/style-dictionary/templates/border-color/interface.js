const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Border Interface', presenter: 'Color' },
});

module.exports = () => ({
  interface: {
    base: token('{ks.color.fg.alpha.1.base}'),
    interactive: {
      base: token('{ks.color.fg.alpha.3.base}'),
      disabled: { base: token('{ks.color.fg.alpha.2.base}') },
      hover: { base: token('{ks.color.fg.alpha.5.base}') },
      active: { base: token('{ks.color.fg.alpha.7.base}') },
      selected: { base: token('{ks.color.primary.base}') },
    },
  },
  'interface-inverted': {
    base: token('{ks.color.fg-inverted.alpha.1.base}'),
    interactive: {
      base: token('{ks.color.fg-inverted.alpha.5.base}'),
      disabled: { base: token('{ks.color.fg-inverted.alpha.8.base}') },
      hover: { base: token('{ks.color.fg-inverted.alpha.7.base}') },
      active: { base: token('{ks.color.fg-inverted.alpha.9.base}') },
      selected: { base: token('{ks.color.primary-inverted.base}') },
    },
  },
});
