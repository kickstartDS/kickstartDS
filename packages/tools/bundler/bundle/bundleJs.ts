import fs from 'fs';
import {
  rollup,
  RollupOptions,
  OutputOptions,
  RollupBuild,
  RollupWatcher,
  watch,
  RollupOutput,
} from 'rollup';
import { babel } from '@rollup/plugin-babel';
import replaceDefault from '@rollup/plugin-replace';
import commonjsDefault from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import log from '../utils/log.js';
import { dirRe } from '../utils/utils.js';
import {
  sharedInputPlugins,
  sharedOutputOptions,
  sharedBabelConfig,
} from './rollupUtils.js';

// info on this monstrosity: https://github.com/rollup/plugins/issues/1329
// @ts-expect-error
const replace = replaceDefault as unknown as replaceDefault.default;
// @ts-expect-error
const commonjs = commonjsDefault as unknown as commonjsDefault.default;

const prepare = async (
  jsPaths: string[]
): Promise<{ inputOptions: RollupOptions; outputOptions: OutputOptions }> => {
  const input: Record<string, string> = {};
  const addInput = (filePath: string) => {
    const [, dir, name] = filePath.match(dirRe) || [];
    input[`${dir}/${name}`] = filePath;
  };
  jsPaths.forEach((jsPath) => {
    addInput(jsPath);

    const componentPath = jsPath.replace(/\/lazy(\w+\.js)/, '/$1');
    if (componentPath !== jsPath && fs.existsSync(componentPath)) {
      addInput(componentPath);
    }
  });
  const inputOptions: RollupOptions = {
    input,
    plugins: [
      ...sharedInputPlugins,
      nodeResolve({
        extensions: ['.js', '.tsx', '.ts'],
      }),
      commonjs(),
      babel(
        sharedBabelConfig({
          extensions: ['.js', '.tsx', '.ts'],
          babelHelpers: 'runtime',
          skipPreflightCheck: true,
        })
      ),
      replace({
        include: /\.tsx$/,
        values: {
          xmlnsXlink: '"xmlns:xlink"',
          xlinkHref: '"xlink:href"',
          tabIndex: 'tabindex',
        },
        preventAssignment: false,
      }),
    ],
    preserveEntrySignatures: 'allow-extension',
  };
  const outputOptions: OutputOptions = {
    ...sharedOutputOptions,
  };
  return {
    inputOptions,
    outputOptions,
  };
};

const bundleJs = async (
  jsPaths: string[]
): Promise<RollupOutput | undefined> => {
  if (!jsPaths.length) return;
  log('starting js bundle');
  const { inputOptions, outputOptions } = await prepare(jsPaths);
  const bundle: RollupBuild = await rollup(inputOptions);
  const { output }: RollupOutput = await bundle.write(outputOptions);
  await bundle.close();
  log('finished js bundle');
  return { output };
};

const watchJs = async (jsPaths: string[]): Promise<void> => {
  if (!jsPaths.length) return;
  const { inputOptions, outputOptions } = await prepare(jsPaths);
  const watcher: RollupWatcher = watch({
    ...inputOptions,
    output: [outputOptions],
  });
  watcher.on('event', (event) => {
    switch (event.code) {
      case 'BUNDLE_END':
        if (event.result) event.result.close();
        break;

      case 'START':
        log('starting js bundle');
        break;

      case 'END':
        log('finished js bundle');
        break;

      case 'ERROR':
        console.error(event.error);
        break;
    }
  });
};

export { bundleJs, watchJs };
