const fontFamilies = require('./font-family')['font-family'];
const fontSizes = require('./font-size')['font-size'];

module.exports = {
  font: Object.fromEntries(
    Object.keys(fontFamilies).map((family) => [
      family,
      Object.fromEntries(
        Object.keys(fontSizes[family]).map((scale) => [
          scale,
          {
            value: `{font-size.${family}.${scale}._.value} / {line-height.${family}.value} {font-family.${family}.value}`,
          },
        ])
      ),
    ])
  ),
};
