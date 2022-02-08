// const { alpha, lighter, darker } = require("../../token-helper/color");

module.exports = {
  color: {
    secondary: {
      r: { value: '153', attributes: { category: null } },
      g: { value: '153', attributes: { category: null } },
      b: { value: '153', attributes: { category: null } },
      _: {
        value:
          'rgb({color.secondary.r.value},{color.secondary.g.value},{color.secondary.b.value})',
        token: { category: 'Colors: Brand' },
      },
      // ...alpha("primary"),
      // ...lighter("primary"),
      // ...darker("primary"),
    },
  },
};
