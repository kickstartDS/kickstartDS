const { round, modularScale } = require('../_helper');

const attributes = { category: 'size' };

const scales = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
const baseIndex = scales.indexOf('m');

module.exports = ({ spacing, breakpoints }) => {
  const breakpointKeys = Object.keys(breakpoints);
  const { base, 'scale-ratio': scaleRatio, 'bp-ratio': bpRatio } = spacing;
  const scaleMs = modularScale(base, scaleRatio);
  const breakpointMs = modularScale(1, bpRatio);
  return {
    ks: {
      spacing: Object.fromEntries(
        scales.map((scale, index) => [
          scale,
          {
            base: {
              value: round(scaleMs(index - baseIndex) / 16),
              attributes,
              token: { category: 'Spacing', presenter: 'Spacing' },
            },
            'bp-factor': Object.fromEntries(
              breakpointKeys.map((breakpoint, bpIndex) => [
                breakpoint,
                { value: round(breakpointMs(bpIndex + 1)) },
              ])
            ),
          },
        ])
      ),
    },
  };
};
