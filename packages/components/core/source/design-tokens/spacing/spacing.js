const precision = require('../../token-helper/precision')(4);
const ms = require('../../token-helper/modular-scale');

const token = { category: 'Spacing' };

const category = 'size';
const baseScale = ms(0.5, 1.618);
const ratio = { value: 1.414 };

module.exports = {
  spacing: {
    xxs: {
      _: { value: '{spacing.xxs.base.value}', token },
      base: { value: precision(baseScale(-3)), attributes: { category } },
      ratio,
    },
    xs: {
      _: { value: '{spacing.xs.base.value}', token },
      base: { value: precision(baseScale(-2)), attributes: { category } },
      ratio,
    },
    s: {
      _: { value: '{spacing.s.base.value}', token },
      base: { value: precision(baseScale(-1)), attributes: { category } },
      ratio,
    },
    m: {
      _: { value: '{spacing.m.base.value}', token },
      base: { value: precision(baseScale(0)), attributes: { category } },
      ratio,
    },
    l: {
      _: { value: '{spacing.l.base.value}', token },
      base: { value: precision(baseScale(1)), attributes: { category } },
      ratio,
    },
    xl: {
      _: { value: '{spacing.xl.base.value}', token },
      base: { value: precision(baseScale(2)), attributes: { category } },
      ratio,
    },
    xxl: {
      _: { value: '{spacing.xxl.base.value}', token },
      base: { value: precision(baseScale(3)), attributes: { category } },
      ratio,
    },
  },
};
