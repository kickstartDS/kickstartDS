const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Primary', presenter: 'Color' },
});

module.exports = () => ({
  primary: {
    interactive: {
      base: token('{ks.color.primary.base}'),
      hover: { base: token('{ks.color.primary.to-bg.2.base}') },
      active: { base: token('{ks.color.primary.to-bg.3.base}') },
    },
    translucent: { base: token('{ks.color.primary.alpha.8.base}') },
  },
  'primary-inverted': {
    interactive: {
      base: token('{ks.color.primary-inverted.base}'),
      hover: { base: token('{ks.color.primary-inverted.to-bg.2.base}') },
      active: { base: token('{ks.color.primary-inverted.to-bg.3.base}') },
    },
    translucent: { base: token('{ks.color.primary-inverted.alpha.8.base}') },
  },
});
