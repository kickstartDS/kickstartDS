const token = { category: 'Colors: Text Primary', presenter: 'Color' };

module.exports = {
  ks: {
    'text-color': {
      primary: {
        _: { value: '{color.primary._.value}', token },
        inverted: {
          _: { value: '{color.white._.value}', token },
          interactive: {
            _: { value: '{color.white._.value}', token },
            hover: {
              value: '{ks.text-color.primary.inverted.interactive._.value}',
              token,
            },
            active: {
              value: '{ks.text-color.primary.inverted.interactive._.value}',
              token,
            },
          },
        },
        interactive: {
          _: { value: '{color.primary._.value}', token },
          hover: {
            value: '{ks.text-color.primary.interactive._.value}',
            token,
          },
          active: {
            value: '{ks.text-color.primary.interactive._.value}',
            token,
          },
          visited: {
            value: '{ks.text-color.primary.interactive._.value}',
            token,
          },
        },
      },
    },
  },
};
