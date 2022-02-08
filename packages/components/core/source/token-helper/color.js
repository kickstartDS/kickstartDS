const precision = require('./precision')(1);
const scale = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function mix(name, color1, color2, token) {
  return Object.fromEntries(
    scale.map((i) => {
      const value1 = precision(1 - i / 10);
      const value2 = precision(i / 10);
      return [
        `${name}-${i}`,
        {
          value: `rgb(calc({color.${color1}.r.value} * ${value1} + {color.${color2}.r.value} * ${value2}), calc({color.${color1}.g.value} * ${value1} + {color.${color2}.g.value} * ${value2}), calc({color.${color1}.b.value} * ${value1} + {color.${color2}.b.value} * ${value2}))`,
          token,
        },
      ];
    })
  );
}

module.exports = {
  alpha(name, token) {
    return Object.fromEntries(
      scale.map((i) => [
        `alpha-${i}`,
        {
          value: `rgba({color.${name}.r.value}, {color.${name}.g.value}, {color.${name}.b.value}, ${precision(
            i / 10
          )})`,
          token,
        },
      ])
    );
  },
  darker(color, token) {
    return mix('daker', color, 'black', token);
  },
  lighter(color, token) {
    return mix('lighter', color, 'white', token);
  },
  mix,
};
