const token = { category: 'Colors: Background Default', presenter: 'Color' };

module.exports = {
  ks: {
    'background-color': {
      default: {
        _: { value: '{color.white._.value}', token },
        inverted: {
          value: ['{color.black._.value}', 0.7],
          attributes: { category: 'alpha-color' },
          token,
        },
      },
    },
  },
};
