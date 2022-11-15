const colorScale = require('./colorScale');

module.exports = (data) => ({
  ...colorScale('positive')(data),
  ...colorScale('informative')(data),
  ...colorScale('notice')(data),
  ...colorScale('negative')(data),
});
