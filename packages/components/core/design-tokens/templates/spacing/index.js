const { modularScale } = require('../_helper');

const rem = (number) => {
  const factor = 10 ** 4;
  return Math.round((number / 16) * factor) / factor;
};

const attributes = { category: 'size' };

const scales = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
const baseIndex = scales.indexOf('m');

module.exports = ({ spacing, breakpoints }) => {
  const breakpointKeys = Object.keys(breakpoints);
  const { base, 'scale-ratio': scaleRatio, 'bp-ratio': bpRatio } = spacing;
  const scaleMs = modularScale(base, scaleRatio);
  return {
    spacing: Object.fromEntries(
      scales.map((scale, index) => {
        const value = scaleMs(index - baseIndex);
        const breakpointMs = modularScale(1, bpRatio);
        return [
          scale,
          {
            base: {
              value: rem(value),
              attributes,
              token: { category: 'Spacing', presenter: 'Spacing' },
            },
            'bp-factor': Object.fromEntries(
              breakpointKeys.map((breakpoint, bpIndex) => [
                breakpoint,
                { value: breakpointMs(bpIndex + 1) },
              ])
            ),
          },
        ];
      })
    ),
  };
};
