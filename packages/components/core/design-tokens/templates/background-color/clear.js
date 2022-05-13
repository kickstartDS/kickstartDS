const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Clear', presenter: 'Color' },
});

module.exports = () => ({
  clear: {
    interactive: {
      base: token('{ks.color.transparent}'),
      hover: { base: token('{ks.color.primary.alpha.2.base}') },
      active: { base: token('{ks.color.primary.alpha.3.base}') },
    },
  },
  'clear-inverted': {
    interactive: {
      base: token('{ks.color.transparent}'),
      hover: { base: token('{ks.color.primary-inverted.alpha.3.base}') },
      active: { base: token('{ks.color.primary-inverted.alpha.4.base}') },
    },
  },
});
