const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Border Default', presenter: 'Color' },
});

module.exports = () => ({
  default: { base: token('{ks.color.fg-inverted.base}') },
  'default-inverted': { base: token('{ks.color.fg.alpha.7.base}') },
});
