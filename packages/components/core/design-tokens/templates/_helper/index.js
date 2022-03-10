const modularScale = (base, ratio) => (step) => ratio ** step * base;

module.exports = { modularScale };
