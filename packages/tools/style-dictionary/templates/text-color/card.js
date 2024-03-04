const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Text Card', presenter: 'Color' },
});

module.exports = () => ({
  card: {
    base: token('{ks.color.fg.alpha.2.base}'),
    interactive: {
      base: token('{ks.color.fg.base}'),
      hover: { base: token('{ks.color.fg.base') },
      active: { base: token('{ks.color.fg.base') },
      selected: { base: token('{ks.color.fg.base') },
    },
  },
  'card-inverted': {
    base: token('{ks.color.fg-inverted.alpha.2.base}'),
    interactive: {
      base: token('{ks.color.fg-inverted.base}'),
      hover: { base: token('{ks.color.fg-inverted.base}') },
      active: { base: token('{ks.color.fg-inverted.base}') },
      selected: { base: token('{ks.color.fg-inverted.base}') },
    },
  },
});
