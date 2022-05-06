const modularScale = (base, ratio) => (step) => ratio ** step * base;

const factor = 10 ** 4;
const round = (number) => Math.round(number * factor) / factor;

const lengthRe = /^([+-]?([0-9]*[.])?[0-9]+)(.*)$/;
const parseLength = (value) => {
  const [, number, , unit] = value.match(lengthRe);
  return [Number(number), unit];
};

module.exports = { modularScale, round, parseLength };
