const token = { category: 'Colors: Background Accent', presenter: 'Color' };

module.exports = {
  ks: {
    'background-color': {
      accent: {
        _: {
          value: ['{color.primary._.value}', 0.1],
          attributes: { category: 'alpha-color' },
          token,
        },
      },
    },
  },
};
