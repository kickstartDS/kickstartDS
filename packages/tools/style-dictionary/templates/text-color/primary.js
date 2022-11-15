const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Text Primary', presenter: 'Color' },
});

module.exports = () => ({
  primary: {
    base: token('{ks.color.primary.base}'),
    interactive: {
      base: token('{ks.color.primary.alpha.2.base}'),
      hover: { base: token('{ks.color.primary.alpha.2.base}') },
      active: { base: token('{ks.color.primary.alpha.2.base}') },
      visited: { base: token('{ks.color.primary.alpha.2.base}') },
    },
  },
  'primary-inverted': {
    base: token('{ks.color.primary-inverted.base}'),
    interactive: {
      base: token('{ks.color.primary-inverted.alpha.2.base}'),
      hover: { base: token('{ks.color.primary-inverted.alpha.2.base}') },
      active: { base: token('{ks.color.primary-inverted.alpha.2.base}') },
      visited: { base: token('{ks.color.primary-inverted.alpha.2.base}') },
    },
  },
});
