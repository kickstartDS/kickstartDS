const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Accent', presenter: 'Color' },
});

module.exports = () => ({
  accent: {
    base: token('{ks.color.bg.to-fg.8.base}'),
  },
  'accent-inverted': {
    base: token('{ks.color.bg-inverted.to-fg.8.base}'),
  },
});
