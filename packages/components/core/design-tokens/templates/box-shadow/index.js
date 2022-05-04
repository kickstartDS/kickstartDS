const Color = require('tinycolor2');

const categories = ['control', 'card', 'surface'];

module.exports = ({ color }) => {
  const shadowColor = Color(color.foreground).toRgb();
  const rgb = `${shadowColor.r},${shadowColor.g},${shadowColor.b}`;
  return {
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
            _: { value: `rgba(${rgb},{ks.box-shadow.opacity.${category}._})` },
            hover: {
              value: `rgba(${rgb},{ks.box-shadow.opacity.${category}.hover})`,
            },
          },
        ])
      ),
      control: {
        _: { value: '0 1px 3px {ks.box-shadow.color.control._}' },
        hover: { value: '0 1px 6px {ks.box-shadow.color.control.hover}' },
      },
      card: {
        _: { value: '0 1px 5px {ks.box-shadow.color.card._}' },
        hover: { value: '0 1px 10px {ks.box-shadow.color.card.hover}' },
      },
      surface: {
        _: { value: '0 1px 10px {ks.box-shadow.color.surface._}' },
        hover: { value: '0 1px 20px {ks.box-shadow.color.surface.hover}' },
      },
    },
  };
};
