import fg from 'fast-glob';
import fs from 'fs-extra';
import { RollupOutput } from 'rollup';
import { bundleTs, watchTs } from './bundleTs.js';
import { bundleJs, watchJs } from './bundleJs.js';
import { compileScss, watchScss } from './scss.js';

const exportsFromRollupOutput = ({
  output,
}: RollupOutput): Map<string, string[]> =>
  output.reduce((prev, element) => {
    if (element.type === 'chunk' && element.isEntry) {
      prev.set(element.fileName.replace('/index.js', ''), element.exports);
    }
    return prev;
  }, new Map<string, string[]>());

const getTsPaths = fg('source/*/**/(index|typing).ts');

const buildBundle = async (): Promise<void> => {
  try {
    const tsPaths = await getTsPaths;
    const { output: tsOutput, cssAssets, jsAssets } = await bundleTs(tsPaths);
    const [{ output: jsOutput }, cssExports] = await Promise.all([
      bundleJs([...jsAssets]),
      compileScss([...cssAssets]),
    ]);

    const exports = [
      ...cssExports,
      ...exportsFromRollupOutput({ output: tsOutput }),
      ...exportsFromRollupOutput({ output: jsOutput }),
    ].sort();
    await fs.writeJSON('lib/exports.json', Object.fromEntries(exports), {
      spaces: 2,
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

const watchBundle = async (): Promise<void> => {
  const tsPaths = await getTsPaths;
  const { cssAssets, jsAssets } = await watchTs(tsPaths);
  watchJs([...jsAssets]);
  watchScss([...cssAssets]);
};

export { buildBundle, watchBundle };
