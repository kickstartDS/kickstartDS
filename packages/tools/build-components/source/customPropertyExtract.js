const path = require('path');
const fs = require('fs-extra');
const { extract } = require('custom-property-extract');

const createTokens = (dest, css) => {
  const dir = path.dirname(dest);
  const base = `${path.basename(dest, '.css')}-tokens.json`;
  const tokens = extract(css, { source: 'content', mode: 'full' });
  return fs
    .outputJson(`${dir}/${base}`, tokens, { spaces: 2 })
    .then(() => fs.stat(`${dir}/${base}`))
    .then((stat) => console.log('# createTokens', `${dir}/${base}`, stat))
    .catch(console.log);
};

module.exports = { createTokens };
