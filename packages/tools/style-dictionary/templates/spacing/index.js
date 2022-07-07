const { round, modularScale } = require('../_helper');

const attributes = { category: 'size' };

const scales = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
const trimmedScales = scales.slice(1, -1);
const baseIndex = scales.indexOf('m');

module.exports = ({ spacing, breakpoints }) => {
  const breakpointKeys = Object.keys(breakpoints);
  const { base, 'scale-ratio': scaleRatio, 'bp-ratio': bpRatio } = spacing;
  const scaleMs = modularScale(base, scaleRatio);
  const breakpointMs = modularScale(1, bpRatio);
  return {
    ks: {
      spacing: {
        ...Object.fromEntries(
          scales.map((scale, index) => [
            scale,
            {
              _: {
                value: `{ks.spacing.${scale}.base}`,
                token: { category: 'Spacing', presenter: 'Spacing' },
              },
              base: {
                value: round(scaleMs(index - baseIndex) / 16).toString(),
                attributes,
              },
              'bp-factor': Object.fromEntries(
                breakpointKeys.map((breakpoint, bpIndex) => [
                  breakpoint,
                  { value: round(breakpointMs(bpIndex + 1)).toString() },
                ])
              ),
            },
          ])
        ),
        stack: Object.fromEntries(
          trimmedScales.map((scale) => [
            scale,
            { value: `{ks.spacing.${scale}._}` },
          ])
        ),
        inline: Object.fromEntries(
          trimmedScales.map((scale) => [
            scale,
            { value: `{ks.spacing.${scale}._}` },
          ])
        ),
        inset: Object.fromEntries(
          trimmedScales.map((scale) => [
            scale,
            { value: `{ks.spacing.${scale}._}` },
          ])
        ),
        'inset-squish': Object.fromEntries(
          trimmedScales.map((scale, index) => [
            scale,
            {
              value: `{ks.spacing.${scales[index]}._} {ks.spacing.${scale}._}`,
            },
          ])
        ),
        'inset-stretch': Object.fromEntries(
          trimmedScales.map((scale, index) => [
            scale,
            {
              value: `{ks.spacing.${
                scales[index + 2]
              }._} {ks.spacing.${scale}._}`,
            },
          ])
        ),
      },
    },
  };
};
