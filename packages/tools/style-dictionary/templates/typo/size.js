const { modularScale, round } = require('../_helper');

const scales = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
const baseIndex = scales.indexOf('m');

module.exports = ({ font }) =>
  Object.entries(font).reduce(
    (
      prev,
      [
        family,
        {
          'font-size': fontSize,
          'line-height': lineHeight,
          'scale-ratio': scaleRatio,
          'bp-factor': bpFactor,
        },
      ]
    ) => {
      const fontSizeMs = modularScale(fontSize, scaleRatio);
      prev['font-size'][family] = {
        'bp-factor': Object.fromEntries(
          Object.entries(bpFactor).map(([key, value]) => [key, { value }])
        ),
        ...Object.fromEntries(
          scales.map((scale, index) => [
            `${scale}-base`,
            {
              value: `${round(fontSizeMs(index - baseIndex) / 16)}rem`,
              attributes: { category: 'size' },
              token: {
                category: `Font Sizes: ${family}`,
                presenter: 'FontSize',
              },
            },
          ])
        ),
      };
      prev['line-height'][family] = Object.fromEntries(
        scales.map((scale) => [scale, { value: lineHeight }])
      );

      return prev;
    },
    {
      'font-size': {},
      'line-height': {},
    }
  );
