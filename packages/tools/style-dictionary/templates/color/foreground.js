const colorScale = require('./colorScale');

module.exports = colorScale('fg', 'foreground');

module.exports = (data) => {
  const scale = colorScale('fg', 'foreground')(data);
  delete scale.fg['to-fg'];
  delete scale['fg-inverted']['to-fg'];
  return scale;
};
