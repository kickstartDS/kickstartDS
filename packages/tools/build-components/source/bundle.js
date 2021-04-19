const fg = require('fast-glob');
const fs = require('fs-extra');
const bundleTs = require('./bundleTs');
const bundleJs = require('./bundleJs');
const scss = require('./scss');

const createIndex = (tsPaths) => {
  const indexContent = tsPaths.reduce(
    (prev, fileName) =>
      `${prev}export * from '${fileName.replace(
        /^(source)(\/.*)(\/index\.ts)$/,
        '.$2'
      )}';\n`,
    ''
  );
  return fs.writeFile('source/index.ts', indexContent);
};

const exportsFromRollupOutput = (output) =>
  output.reduce((prev, { isEntry, fileName, exports }) => {
    if (isEntry) {
      prev.set(fileName.replace('/index.js', ''), exports);
    }
    return prev;
  }, new Map());

module.exports = async function () {
  try {
    const tsPaths = (await fg('source/*/**/index.ts')).sort();
    await createIndex(tsPaths);
    tsPaths.push('source/index.ts');

    const { output: tsOutput, cssAssets, jsAssets } = await bundleTs(tsPaths);
    const [cssExports, { output: jsOutput }] = await Promise.all([
      scss([...cssAssets]),
      bundleJs([...jsAssets]),
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
  }
};
