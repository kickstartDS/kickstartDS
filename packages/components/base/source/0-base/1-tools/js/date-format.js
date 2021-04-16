/**
 * @param {string|number} value
 * @returns {string} the last two digits with leading '0'
 */
function twoDigit(value) {
  return `00${value}`.slice(-2);
}

/**
 * Returns a formatted version of the given date.
 *
 * This is a condensed version of Steven Levithan's Date Format 1.2.3 (MIT license)
 * @see http://stevenlevithan.com/assets/misc/date.format.js
 *
 * @param {Date} date
 * @param {string} mask e.g. 'DD.MM.YYYYYYYY', 'YYYY-MM-DD', …
 *   - 'D':  day of the month (1..31)
 *   - 'DD': two-digit day of month (01..31)
 *   - 'M':  month (1..12)
 *   - 'MM': two-digit month (01..12)
 *   - 'YY': two-digit year (e.g. 18 for 2018)
 *   - 'YYYY': four-digit year (e.g. 2018)
 * @return {string} formatted date string
 */
export default function dateFormat(date, mask) {
  const token = /D{1,2}|M{1,2}|YY(?:YY)?/g;
  const D = date.getDate();
  const M = date.getMonth() + 1;
  const Y = date.getFullYear();
  const flags = {
    D,
    DD: twoDigit(D),
    M,
    MM: twoDigit(M),
    YY: twoDigit(Y),
    YYYY: Y,
  };

  return mask.replace(token, (match) =>
    match in flags ? flags[match] : match.slice(1, match.length - 1)
  );
}
