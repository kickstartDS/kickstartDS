const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Bold', presenter: 'Color' },
});

module.exports = () => ({
  bold: {
    base: token('{ks.color.primary.to-bg.6.base}'),
  },
  'bold-inverted': {
    base: token('{ks.color.primary-inverted.to-bg.6.base}'),
  },
});
