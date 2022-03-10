const em = (number) => {
  const factor = 10 ** 4;
  return Math.round((number / 16) * factor) / factor;
};

module.exports = ({ breakpoints }) => ({
  breakpoint: Object.entries(breakpoints).reduce(
    (prev, [key, px]) => ({
      ...prev,
      [key]: { value: `${em(px)}em`, private: true },
    }),
    {}
  ),
});
