/* eslint-disable eqeqeq */
module.exports = (v1, operator, v2) =>
  ({
    '==': v1 == v2,
    '===': v1 === v2,
    '!=': v1 != v2,
    '!==': v1 !== v2,
    '&&': v1 && v2,
    '||': v1 || v2,
    '<': v1 < v2,
    '<=': v1 <= v2,
    '>': v1 > v2,
    '>=': v1 >= v2,
  }[operator]);
