const { parseLength } = require('../_helper');

const token = { category: 'Border Radius', presenter: 'BorderRadius' };

module.exports = ({ 'border-radius': borderRadius }) => {
  const [number, unit] = parseLength(borderRadius);

  return {
    ks: {
      'border-width': {
        default: { value: '1px' },
        emphasized: { value: '2px' },
      },
      'border-radius': {
        control: { value: borderRadius, token },
        card: { value: borderRadius, token },
        surface: { value: `${number * 2}${unit}`, token },
        pill: { value: '999px', token },
        circle: { value: '50%', token },
      },
    },
  };
};
