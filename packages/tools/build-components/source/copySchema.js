const fg = require('fast-glob');
const fs = require('fs-extra');
const { dirRe } = require('./utils');

module.exports = async function () {
  const files = await fg('source/**/!(_)*.(schema|definitions).json');
  return files.map(async (file) => {
    const [, dir, base, ext] = file.match(dirRe);
    const dest = `lib/${dir}/${base}.${ext}`;
    await fs.copy(file, dest);
    return dest;
  });
};
