module.exports = ({ 'font-weight': fontWeight }) =>
  Object.entries(fontWeight).reduce(
    (prev, [key, value]) => ({
      ...prev,
      [key]: {
        value,
        token: { category: 'Font Weights', presenter: 'FontWeight' },
      },
    }),
    {}
  );
