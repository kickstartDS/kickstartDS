const modularScale = (base, ratio) => (step) => ratio ** step * base;

const factor = 10 ** 4;
const round = (number) => Math.round(number * factor) / factor;

module.exports = { modularScale, round };
