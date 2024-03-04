const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Border Accent', presenter: 'Color' },
});

module.exports = () => ({
  accent: {
    base: token('{ks.color.primary.to-bg.8.base}'),
  },
  'accent-inverted': {
    base: token('{ks.color.primary-inverted.to-bg.8.base}'),
  },
});
