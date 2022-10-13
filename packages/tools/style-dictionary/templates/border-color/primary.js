const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Border Primary', presenter: 'Color' },
});

module.exports = () => ({
  primary: {
    base: token('{ks.color.primary.base}'),
    interactive: {
      base: token('{ks.color.primary.base}'),
      hover: { base: token('{ks.color.primary.to-bg.2.base}') },
      active: { base: token('{ks.color.primary.to-bg.3.base}') },
      selected: { base: token('{ks.color.primary.base}') },
    },
    translucent: { base: token('{ks.color.primary.alpha.8.base}') },
  },
  'primary-inverted': {
    base: token('{ks.color.primary-inverted.base}'),
    interactive: {
      base: token('{ks.color.primary-inverted.base}'),
      hover: { base: token('{ks.color.primary-inverted.to-bg.2.base}') },
      active: { base: token('{ks.color.primary-inverted.to-bg.3.base}') },
      selected: { base: token('{ks.color.primary-inverted.base}') },
    },
    translucent: { base: token('{ks.color.primary-inverted.alpha.8.base}') },
  },
});
