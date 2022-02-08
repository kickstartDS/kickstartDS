module.exports = (decimal) => {
  const factor = 10 ** decimal;
  return (number) => Math.round(number * factor) / factor;
};
