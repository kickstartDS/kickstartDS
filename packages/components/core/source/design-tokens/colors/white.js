const { alpha } = require('../../token-helper/color');

const token = { category: 'Colors: Shades White' };

module.exports = {
  color: {
    white: {
      r: { value: '255', attributes: { category: null } },
      g: { value: '255', attributes: { category: null } },
      b: { value: '255', attributes: { category: null } },
      _: {
        value:
          'rgb({color.white.r.value},{color.white.g.value},{color.white.b.value})',
        token,
      },
      ...alpha('white', token),
    },
  },
};
