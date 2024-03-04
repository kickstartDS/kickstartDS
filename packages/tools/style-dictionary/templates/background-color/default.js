const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Default', presenter: 'Color' },
});

module.exports = () => ({
  default: { base: token('{ks.color.bg.base}') },
  'default-inverted': { base: token('{ks.color.bg-inverted.base}') },
});
