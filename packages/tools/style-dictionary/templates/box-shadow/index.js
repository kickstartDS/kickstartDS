const Color = require('tinycolor2');
const { parseLength } = require('../_helper');

const token = { category: 'Box Shadow', presenter: 'Shadow' };
const categories = ['control', 'card', 'surface'];

module.exports = ({ color, 'box-shadow': boxShadow }) => {
  const shadowColor = Color(color.foreground).toRgb();
  const rgb = `${shadowColor.r},${shadowColor.g},${shadowColor.b}`;
  const [blurNumber, blurUnit] = parseLength(boxShadow.blur);

  return {
    ks: {
      'box-shadow': {
        opacity: {
          control: {
            _: { value: '0.2' },
            hover: { value: '0.3' },
          },
          card: {
            _: { value: '0.2' },
            hover: { value: '0.3' },
          },
          surface: {
            _: { value: '0.1' },
            hover: { value: '0.2' },
          },
        },
        color: Object.fromEntries(
          categories.map((category) => [
            category,
            {
              _: {
                value: `rgba(${rgb},{ks.box-shadow.opacity.${category}._})`,
              },
              hover: {
                value: `rgba(${rgb},{ks.box-shadow.opacity.${category}.hover})`,
              },
            },
          ])
        ),
        control: {
          _: {
            value: `0 1px ${blurNumber}${blurUnit} {ks.box-shadow.color.control._}`,
            token,
          },
          hover: {
            value: `0 1px ${
              blurNumber * 2
            }${blurUnit} {ks.box-shadow.color.control.hover}`,
          },
        },
        card: {
          _: {
            value: `0 1px ${
              blurNumber * 2
            }${blurUnit} {ks.box-shadow.color.card._}`,
            token,
          },
          hover: {
            value: `0 1px ${
              blurNumber * 4
            }${blurUnit} {ks.box-shadow.color.card.hover}`,
          },
        },
        surface: {
          _: {
            value: `0 1px ${
              blurNumber * 4
            }${blurUnit} {ks.box-shadow.color.surface._}`,
            token,
          },
          hover: {
            value: `0 1px ${
              blurNumber * 8
            }${blurUnit} {ks.box-shadow.color.surface.hover}`,
          },
        },
      },
    },
  };
};
