const fs = require('fs-extra');
const fg = require('fast-glob');

const glob = 'source/**/*stories.mdx';

const copy = async () => {
  const paths = await fg(glob);
  return Promise.all(
    paths.map((src) => {
      const dest = src.replace('source', 'lib');
      return fs.copy(fs.copy(src, dest));
    })
  );
};

module.exports = { copy };
