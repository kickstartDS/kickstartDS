const rem = (number) => {
  const factor = 10 ** 4;
  return Math.round((number / 16) * factor) / factor;
};

const attributes = { category: 'size' };

module.exports = ({ spacing }) => ({
  spacing: Object.entries(spacing).reduce((prev, [key, { base, bp }]) => {
    prev[key] = {
      _: {
        value: rem(base),
        attributes,
        token: { category: 'Spacing', presenter: 'Spacing' },
      },
      bp: Object.entries(bp).reduce((prev2, [breakpoint, value]) => {
        prev2[breakpoint] = { value: rem(value), attributes };
        return prev2;
      }, {}),
    };
    return prev;
  }, {}),
});
