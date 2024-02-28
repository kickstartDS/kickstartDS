const { capitalCase } = require('change-case');

module.exports = (key) => {
  const token = (value) => ({
    value,
    attributes: { category: 'color' },
    token: {
      category: 'Colors: Text ' + capitalCase(key),
      presenter: 'Color',
    },
  });
  return {
    [key]: {
      base: token(`{ks.color.${key}.base}`),
      interactive: {
        base: token(`{ks.color.${key}.base}`),
        hover: { base: token(`{ks.color.${key}.alpha.2.base}`) },
        active: { base: token(`{ks.color.${key}.alpha.2.base}`) },
        selected: { base: token(`{ks.color.${key}.alpha.2.base}`) },
      },
    },
    [`${key}-inverted`]: {
      base: token(`{ks.color.${key}-inverted.base}`),
      interactive: {
        base: token(`{ks.color.${key}-inverted.alpha.2.base}`),
        hover: { base: token(`{ks.color.${key}-inverted.alpha.2.base}`) },
        active: { base: token(`{ks.color.${key}-inverted.alpha.2.base}`) },
        selected: { base: token(`{ks.color.${key}-inverted.alpha.2.base}`) },
      },
    },
  };
};
