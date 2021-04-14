/* eslint-disable no-param-reassign */
module.exports = (val1, operator, val2) => {
  val1 = parseFloat(val1);
  val2 = parseFloat(val2);

  return {
    '+': val1 + val2,
    '-': val1 - val2,
    '*': val1 * val2,
    '/': val1 / val2,
    '%': val1 % val2,
  }[operator];
};
