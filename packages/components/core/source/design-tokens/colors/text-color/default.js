const token = { category: 'Colors: Text Default', presenter: 'Color' };

module.exports = {
  ks: {
    'text-color': {
      default: {
        _: { value: '{color.black._.value}', token },
        interactive: {
          _: { value: 'darkblue', token },
          hover: {
            value: '{ks.text-color.default.interactive._.value}',
            token,
          },
          active: {
            value: '{ks.text-color.default.interactive._.value}',
            token,
          },
          visited: {
            value: '{ks.text-color.default.interactive._.value}',
            token,
          },
        },
        inverted: { value: '{color.white._.value}', token },
      },
    },
  },
};
