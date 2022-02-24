const token = { category: 'Colors: Background Primary', presenter: 'Color' };

module.exports = {
  ks: {
    'background-color': {
      primary: {
        interactive: {
          _: { value: '{color.primary._.value}', token },
          hover: {
            value: [
              '{ks.background-color.primary.interactive._.value}',
              '{color.white._.value}',
              20,
            ],
            attributes: { category: 'mixed-color' },
            token,
          },
          active: {
            value: [
              '{ks.background-color.primary.interactive._.value}',
              '{color.white._.value}',
              30,
            ],
            attributes: { category: 'mixed-color' },
            token,
          },
        },
        inverted: {
          tbd: {
            _: {
              value: ['{color.white._.value}', 0.8],
              attributes: { category: 'alpha-color' },
              token,
            },
          },
          interactive: {
            _: { value: '{color.white._.value}', token },
            hover: {
              value: [
                '{ks.background-color.primary.inverted.interactive._.value}',
                '{color.primary._.value}',
                10,
              ],
              attributes: { category: 'mixed-color' },
              token,
            },
            active: {
              value: [
                '{ks.background-color.primary.inverted.interactive._.value}',
                '{color.primary._.value}',
                20,
              ],
              attributes: { category: 'mixed-color' },
              token,
            },
          },
        },
        tbd: {
          _: {
            value: ['{color.primary._.value}', 0.8],
            attributes: { category: 'alpha-color' },
            token,
          },
          interactive: { value: '{color.white._.value}', token },
        },
      },
    },
  },
};
