const { modularScale } = require('../_helper');

const rem = (number) => {
  const factor = 10 ** 4;
  return Math.round((number / 16) * factor) / factor;
};

const attributes = { category: 'size' };

const scales = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
const baseIndex = scales.indexOf('m');
const breakpoints = ['s', 'm', 'xl'];

module.exports = ({ spacing }) => {
  const { base, 'scale-ratio': scaleRatio, 'bp-ratio': bpRatio } = spacing;
  const scaleMs = modularScale(base, scaleRatio);
  return {
    spacing: Object.fromEntries(
      scales.map((scale, index) => {
        const value = scaleMs(index - baseIndex);
        const breakpointMs = modularScale(value, bpRatio);
        return [
          scale,
          {
            _: {
              value: rem(value),
              attributes,
              token: { category: 'Spacing', presenter: 'Spacing' },
            },
            bp: Object.fromEntries(
              breakpoints.map((breakpoint, bpIndex) => [
                breakpoint,
                {
                  value: rem(breakpointMs(bpIndex + 1)),
                  attributes,
                },
              ])
            ),
          },
        ];
      })
    ),
  };
};
