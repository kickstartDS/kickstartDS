const Color = require('tinycolor2');
const { Bezier } = require('bezier-js');

const token = (value, label = '') => ({
  value: Color(value).toRgb(),
  attributes: { category: 'color' },
  token: { category: `Colors: Primary ${label}`.trim(), presenter: 'Color' },
});

const indices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

module.exports = ({ color }) => {
  const b = new Bezier(
    { x: 0, y: 0 },
    { x: 1, y: 0.1 },
    { x: 0, y: 0.9 },
    { x: 1, y: 1 }
  );
  const lut = b.getLUT(10);
  const scale = lut.map(({ y }) => Math.round(y * 100) / 100);
  const primary = Color(color.primary);
  return {
    primary: {
      _: token(primary),
      alpha: Object.fromEntries(
        indices.map((index) => [
          index.toString(),
          token(primary.setAlpha(scale[index]), 'Alpha Scale'),
        ])
      ),
    },
  };
};
