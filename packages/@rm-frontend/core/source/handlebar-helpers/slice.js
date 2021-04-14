module.exports = (array, start, end) => {
  if (!array) console.log(start, end);
  return array && array.slice(start, end);
};
