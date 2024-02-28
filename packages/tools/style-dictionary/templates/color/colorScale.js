const Color = require('tinycolor2');
const { capitalCase } = require('change-case');
const { alphaScale } = require('../_helper');

const indices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const scale = alphaScale(indices.length);

const round = (number, digits = 3) => +number.toFixed(digits);

const token = (key, value) => ({
  value: value.toRgb(),
  attributes: { category: 'color' },
  token: {
    category: `Colors: ${capitalCase(key)}`,
    presenter: 'Color',
  },
});

module.exports =
  (key, name = key, nameInverted = `${name}-inverted`) =>
  ({ color }) => ({
    [key]: {
      base: token(name, Color(color[name])),
      alpha: Object.fromEntries(
        indices.map((index) => [
          index.toString(),
          {
            base: token(
              name,
              Color(color[name]).setAlpha(round(1 - scale[index]))
            ),
          },
        ])
      ),
      'to-bg': Object.fromEntries(
        indices.map((index) => [
          index.toString(),
          {
            base: token(
              name,
              Color.mix(color[name], color.background, scale[index] * 100)
            ),
          },
        ])
      ),
      'to-fg': Object.fromEntries(
        indices.map((index) => [
          index.toString(),
          {
            base: token(
              name,
              Color.mix(color[name], color.foreground, scale[index] * 100)
            ),
          },
        ])
      ),
    },
    [`${key}-inverted`]: {
      base: token(nameInverted, Color(color[nameInverted])),
      alpha: Object.fromEntries(
        indices.map((index) => [
          index.toString(),
          {
            base: token(
              nameInverted,
              Color(color[nameInverted]).setAlpha(round(1 - scale[index]))
            ),
          },
        ])
      ),
      'to-bg': Object.fromEntries(
        indices.map((index) => [
          index.toString(),
          {
            base: token(
              nameInverted,
              Color.mix(
                color[nameInverted],
                color['background-inverted'],
                scale[index] * 100
              )
            ),
          },
        ])
      ),
      'to-fg': Object.fromEntries(
        indices.map((index) => [
          index.toString(),
          {
            base: token(
              nameInverted,
              Color.mix(
                color[nameInverted],
                color['foreground-inverted'],
                scale[index] * 100
              )
            ),
          },
        ])
      ),
    },
  });
