const token = (value) => ({
  value,
  attributes: { category: 'color' },
  token: { category: 'Colors: Background Card', presenter: 'Color' },
});

module.exports = () => ({
  card: {
    base: token('{ks.color.fg.alpha.9.base}'),
    interactive: {
      base: token('{ks.color.fg.alpha.8.base}'),
      disabled: { base: token('{ks.color.fg.alpha.7.base}') },
      hover: { base: token('{ks.color.fg.alpha.9.base}') },
      active: { base: token('{ks.color.fg.alpha.9.base}') },
      selected: { base: token('{ks.color.primary.base}') },
    },
  },
  'card-inverted': {
    base: token('{ks.color.fg-inverted.alpha.9.base}'),
    interactive: {
      base: token('{ks.color.fg-inverted.alpha.8.base}'),
      disabled: { base: token('{ks.color.fg-inverted.alpha.7.base}') },
      hover: { base: token('{ks.color.fg-inverted.alpha.9.base}') },
      active: { base: token('{ks.color.fg-inverted.alpha.9.base}') },
      selected: { base: token('{ks.color.primary-inverted.base}') },
    },
  },
});
