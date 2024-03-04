const { Bezier } = require('bezier-js');

const modularScale = (base, ratio) => (step) => ratio ** step * base;

const factor = 10 ** 4;
const round = (number) => Math.round(number * factor) / factor;

const lengthRe = /^([+-]?([0-9]*[.])?[0-9]+)(.*)$/;
const parseLength = (value) => {
  const [, number, , unit] = value.match(lengthRe);
  return [Number(number), unit];
};

const b = new Bezier(
  { x: 0, y: 0 },
  { x: 1, y: 0.1 },
  { x: 0, y: 0.9 },
  { x: 1, y: 1 }
);
const alphaScale = (steps) => {
  const lut = b.getLUT(steps + 1);
  return lut.map(({ y }) => Math.round(y * 100) / 100);
};

module.exports = {
  modularScale,
  round,
  parseLength,
  alphaScale,
};
