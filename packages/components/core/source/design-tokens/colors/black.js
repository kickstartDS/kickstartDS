const { alpha } = require('../../token-helper/color');

const token = { category: 'Colors: Shades Black' };

module.exports = {
  color: {
    black: {
      _: {
        value: '#000',
        token,
      },
      alpha: alpha('black', token),
    },
  },
};
