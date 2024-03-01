const { capitalCase } = require('change-case');

module.exports = (key) => {
  const token = (value) => ({
    value,
    attributes: { category: 'color' },
    token: {
      category: 'Colors: Border ' + capitalCase(key),
      presenter: 'Color',
    },
  });
  return {
    [key]: {
      base: token(`{ks.color.${key}.base}`),
      interactive: {
        base: token(`{ks.color.${key}.base}`),
        hover: { base: token(`{ks.color.${key}.to-bg.2.base}`) },
        active: { base: token(`{ks.color.${key}.to-bg.3.base}`) },
        selected: { base: token(`{ks.color.${key}.base}`) },
      },
      translucent: { base: token(`{ks.color.${key}.alpha.2.base}`) },
    },
    [`${key}-inverted`]: {
      base: token(`{ks.color.${key}-inverted.base}`),
      interactive: {
        base: token(`{ks.color.${key}-inverted.base}`),
        hover: { base: token(`{ks.color.${key}-inverted.to-bg.2.base}`) },
        active: { base: token(`{ks.color.${key}-inverted.to-bg.3.base}`) },
        selected: { base: token(`{ks.color.${key}-inverted.base}`) },
      },
      translucent: { base: token(`{ks.color.${key}-inverted.alpha.2.base}`) },
    },
  };
};
