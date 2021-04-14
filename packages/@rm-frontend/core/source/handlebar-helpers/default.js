module.exports = (value, fallback) =>
  typeof value !== 'undefined' ? value : fallback;
