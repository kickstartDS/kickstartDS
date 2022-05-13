const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Text Primary', presenter: 'Color' },
});

module.exports = () => ({
  primary: {
    base: token('{ks.color.primary.base}'),
    interactive: {
      base: token('{ks.color.primary.base}'),
      hover: { base: token('{ks.color.primary.base}') },
      active: { base: token('{ks.color.primary.base}') },
    },
  },
  'primary-inverted': {
    base: token('{ks.color.primary-inverted.base}'),
    interactive: {
      base: token('{ks.color.primary-inverted.base}'),
      hover: { base: token('{ks.color.primary-inverted.base}') },
      active: { base: token('{ks.color.primary-inverted.base}') },
    },
  },
});
