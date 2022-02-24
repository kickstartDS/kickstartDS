const token = { category: 'Colors: Background Clear', presenter: 'Color' };

module.exports = {
  ks: {
    'background-color': {
      clear: {
        interactive: {
          _: { value: 'transparent', token },
          hover: {
            value: ['{color.primary._.value}', 0.1],
            attributes: { category: 'alpha-color' },
            token,
          },
          active: {
            value: ['{color.primary._.value}', 0.2],
            attributes: { category: 'alpha-color' },
            token,
          },
        },
        // TBD do we need clear inverted? maybe for the hover- & active-states (?)
        inverted: {
          interactive: {
            _: { value: 'transparent', token },
            hover: {
              value: ['{color.primary._.value}', 0.2],
              attributes: { category: 'alpha-color' },
              token,
            },
            active: {
              value: ['{color.primary._.value}', 0.3],
              attributes: { category: 'alpha-color' },
              token,
            },
          },
        },
      },
    },
  },
};
