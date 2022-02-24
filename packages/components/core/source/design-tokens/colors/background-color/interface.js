const token = { category: 'Colors: Background Interface', presenter: 'Color' };

module.exports = {
  ks: {
    'background-color': {
      interface: {
        _: {
          value: ['{color.black._.value}', 0.1],
          attributes: { category: 'alpha-color' },
          token,
        },
        interactive: {
          _: { value: 'transparent', token },
          disabled: {
            value: ['{color.black._.value}', 0.1],
            attributes: { category: 'alpha-color' },
            token,
          },
        },
      },
    },
  },
};
