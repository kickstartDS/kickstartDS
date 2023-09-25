const fg = require('fast-glob');
const fs = require('fs-extra');
const { bundleTs, watchTs } = require('./bundleTs');
const { bundleJs, watchJs } = require('./bundleJs');
const { compileScss, watchScss } = require('./scss');

const exportsFromRollupOutput = (output) =>
  output.reduce((prev, { isEntry, fileName, exports }) => {
    if (isEntry) {
      prev.set(fileName.replace('/index.js', ''), exports);
    }
    return prev;
  }, new Map());

const getTsPaths = fg('source/*/**/(index|typing).ts');

const buildBundle = async () => {
  try {
    const tsPaths = await getTsPaths;
    const { output: tsOutput, cssAssets, jsAssets } = await bundleTs(tsPaths);
    const [{ output: jsOutput }, cssExports] = await Promise.all([
      bundleJs([...jsAssets]),
      compileScss([...cssAssets]),
    ]);

    const exports = [
      ...cssExports,
      ...exportsFromRollupOutput(tsOutput),
      ...exportsFromRollupOutput(jsOutput),
    ].sort();
    await fs.writeJSON('lib/exports.json', Object.fromEntries(exports), {
      spaces: 2,
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

const watchBundle = async () => {
  const tsPaths = await getTsPaths;
  const { cssAssets, jsAssets } = await watchTs(tsPaths);
  watchJs([...jsAssets]);
  watchScss([...cssAssets]);
};

module.exports = {
  buildBundle,
  watchBundle,
};
