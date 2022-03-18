const precision = require('./precision')(1);

const scale = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function mix(color1, color2, token) {
  return Object.fromEntries(
    scale.map((i) => [
      i,
      {
        value: [
          `{color.${color1}._.value}`,
          `{color.${color2}._.value}`,
          i * 10,
        ],
        token,
        attributes: { category: 'mixed-color' },
      },
    ])
  );
}

module.exports = {
  alpha(color, token) {
    return Object.fromEntries(
      scale.map((i) => [
        i,
        {
          value: [`{color.${color}._.value}`, precision(i / 10)],
          token,
          attributes: { category: 'alpha-color' },
        },
      ])
    );
  },
  darker(color, token) {
    return mix(color, 'black', token);
  },
  lighter(color, token) {
    return mix(color, 'white', token);
  },
  mix,
};
