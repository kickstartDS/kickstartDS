module.exports = ({ font }) =>
  Object.entries(font).reduce(
    (prev, [key, { family }]) => ({
      ...prev,
      [key]: {
        value: family,
        token: { category: 'Font Families', presenter: 'FontFamily' },
      },
    }),
    {}
  );
