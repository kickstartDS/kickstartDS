const { alpha } = require('../../token-helper/color');

const token = { category: 'Colors: Shades White' };

module.exports = {
  color: {
    white: {
      r: { value: '255', attributes: { category: null } },
      g: { value: '255', attributes: { category: null } },
      b: { value: '255', attributes: { category: null } },
      _: {
        value: {
          r: '{color.white.r.value}',
          g: '{color.white.g.value}',
          b: '{color.white.b.value}',
        },
        token,
      },
      alpha: alpha('white', token),
    },
  },
};
