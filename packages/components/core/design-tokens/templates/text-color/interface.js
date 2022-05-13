const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Text Interface', presenter: 'Color' },
});

module.exports = () => ({
  interface: {
    base: token('{ks.color.fg.alpha.8.base}'),
    interactive: {
      base: token('{ks.color.fg.base}'),
    },
  },
  'interface-inverted': {
    base: token('{ks.color.fg-inverted.alpha.8.base}'),
    interactive: {
      base: token('{ks.color.fg-inverted.base}'),
    },
  },
});
