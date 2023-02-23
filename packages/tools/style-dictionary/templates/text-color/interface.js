const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Text Interface', presenter: 'Color' },
});

module.exports = () => ({
  interface: {
    base: token('{ks.color.fg.alpha.3.base}'),
    interactive: {
      base: token('{ks.color.fg.base}'),
      hover: { base: token('{ks.color.fg.base') },
      active: { base: token('{ks.color.fg.base') },
      visited: { base: token('{ks.color.fg.base') },
    },
  },
  'interface-inverted': {
    base: token('{ks.color.fg-inverted.alpha.3.base}'),
    interactive: {
      base: token('{ks.color.fg-inverted.base}'),
      hover: { base: token('{ks.color.fg-inverted.base}') },
      active: { base: token('{ks.color.fg-inverted.base}') },
      visited: { base: token('{ks.color.fg-inverted.base}') },
    },
  },
});
