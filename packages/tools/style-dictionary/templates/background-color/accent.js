const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Accent', presenter: 'Color' },
});

module.exports = () => ({
  accent: {
    base: token('{ks.color.fg.alpha.2.base}'),
  },
  'accent-inverted': {
    base: token('{ks.color.fg-inverted.alpha.2.base}'),
  },
});
