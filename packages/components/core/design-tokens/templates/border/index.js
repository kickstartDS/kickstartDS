const { parseLength } = require('../_helper');

module.exports = ({ 'border-radius': borderRadius }) => {
  const [number, unit] = parseLength(borderRadius);

  return {
    ks: {
      'border-width': {
        default: { value: '1px' },
        emphasized: { value: '2px' },
      },
      'border-radius': {
        control: { value: borderRadius },
        card: { value: borderRadius },
        surface: { value: `${number * 2}${unit}` },
        pill: { value: '999px' },
        circle: { value: '50%' },
      },
    },
  };
};
