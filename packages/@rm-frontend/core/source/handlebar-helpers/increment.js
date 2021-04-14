function* increment(value) {
  while (true) {
    // eslint-disable-next-line no-param-reassign
    value += 1;
    yield value;
  }
}

const inc = increment(0);

module.exports = () => inc.next().value;
