const token = { category: 'Colors: Text Interface', presenter: 'Color' };

module.exports = {
  ks: {
    'text-color': {
      interface: {
        _: {
          value: ['{color.black._.value}', 0.8],
          attributes: { category: 'alpha-color' },
          token,
        },
        interactive: {
          _: { value: '{color.black._.value}', token },
        },
      },
    },
  },
};
