const colorScale = require('./colorScale');

module.exports = (data) => {
  const scale = colorScale('bg', 'background')(data);
  delete scale.bg['to-bg'];
  delete scale['bg-inverted']['to-bg'];
  return scale;
};
