const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Accent', presenter: 'Color' },
});

module.exports = () => ({
  bold: {
    base: token('{ks.color.primary.to-bg.7.base}'),
  },
  'bold-inverted': {
    base: token('{ks.color.primary-inverted.to-bg.7.base}'),
  },
});
