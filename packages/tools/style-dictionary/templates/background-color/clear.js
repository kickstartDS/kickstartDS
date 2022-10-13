const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Clear', presenter: 'Color' },
});

module.exports = () => ({
  clear: {
    base: token('{ks.color.transparent.base}'),
    interactive: {
      base: token('{ks.color.transparent.base}'),
      hover: { base: token('{ks.color.primary.alpha.2.base}') },
      active: { base: token('{ks.color.primary.alpha.3.base}') },
      selected: { base: token('{ks.color.primary.alpha.4.base}') },
    },
  },
  'clear-inverted': {
    base: token('{ks.color.transparent.base}'),
    interactive: {
      base: token('{ks.color.transparent.base}'),
      hover: { base: token('{ks.color.primary-inverted.alpha.3.base}') },
      active: { base: token('{ks.color.primary-inverted.alpha.4.base}') },
      selected: { base: token('{ks.color.primary-inverted.alpha.5.base}') },
    },
  },
});
