module.exports = (n, block) => {
  let accum = '';
  for (let i = 0; i < n; i += 1) {
    block.data.index = i + 1;
    block.data.first = i === 0;
    block.data.last = i === n - 1;
    accum += block.fn(this);
  }
  return accum;
};
