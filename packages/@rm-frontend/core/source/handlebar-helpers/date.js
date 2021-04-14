/* eslint-disable no-restricted-globals */
const { format } = require('date-fns');

module.exports = (a, b) => {
  const date = new Date(a);
  return isNaN(date) ? undefined : format(date, b);
};
