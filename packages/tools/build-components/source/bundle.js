const fg = require('fast-glob');
const fs = require('fs-extra');
const { bundleTs, watchTs } = require('./bundleTs');
const { bundleJs, watchJs } = require('./bundleJs');
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

const exportsFromEsbuildOutput = (output) =>
  Object.entries(output).reduce((prev, [fileName, { exports }]) => {
    if (!/^lib\/_shared\//.test(fileName)) {
      prev.set(fileName.replace(/^lib\//, ''), exports);
    }
    return prev;
  }, new Map());

const getTsPaths = async () => {
  const tsPaths = (await fg('source/*/**/index.ts')).sort();
  await createIndex(tsPaths);
  tsPaths.push('source/index.ts');
  return tsPaths;
};

const buildBundle = async () => {
  try {
    const tsPaths = await getTsPaths();
    const { output: tsOutput, cssAssets, jsAssets } = await bundleTs(tsPaths);
    const [jsOutput, cssExports] = await Promise.all([
      bundleJs([...jsAssets]),
      scss([...cssAssets]),
    ]);

    const exports = [
      ...cssExports,
      ...exportsFromRollupOutput(tsOutput),
      ...exportsFromEsbuildOutput(jsOutput),
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
  const tsPaths = await getTsPaths();
  const { cssAssets, jsAssets } = await watchTs(tsPaths);
  watchJs([...jsAssets]);
};
module.exports = {
  buildBundle,
  watchBundle,
};
