const fs = require('fs-extra');
const rollup = require('rollup');
const { babel } = require('@rollup/plugin-babel');
const replace = require('@rollup/plugin-replace');
const importResolver = require('rollup-plugin-import-resolver');
const merge = require('lodash/merge');
const esbuild = require('esbuild');
const del = require('del');
const log = require('./log');
const { dirRe } = require('./utils');
const {
  sharedInputPlugins,
  sharedOutputOptions,
  sharedBabelConfig,
} = require('./rollupUtils');

const prepare = async (jsPaths) => {
  const input = Object.fromEntries(
    jsPaths.map((file) => {
      const [, dir, name] = file.match(dirRe);
      return [`${dir}/${name}`, file];
    })
  );

  const inputOptions = {
    input,
    plugins: [
      ...sharedInputPlugins,
      importResolver({
        extensions: ['.js', '.tsx'],
      }),
      babel(
        merge({}, sharedBabelConfig, {
          extensions: ['.js', '.tsx'],
          babelHelpers: 'runtime',
          skipPreflightCheck: true,
          plugins: [
            [
              'babel-plugin-transform-jsx-to-htm',
              {
                tag: 'html',
                import: {
                  module: '@kickstartds/core/lib/core',
                  export: 'html',
                },
              },
            ],
          ],
        })
      ),
      replace({
        exclude: '',
        include: '**/*.tsx',
        values: {
          // unfortunately, vhtml doesn't handle all special JSX attributes, so they have to be replaced manually
          // https://github.com/developit/vhtml/blob/master/src/vhtml.js#L7 vs https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes
          xmlnsXlink: '"xmlns:xlink"',
          xlinkHref: '"xlink:href"',
          tabIndex: 'tabindex',
        },
        preventAssignment: false,
      }),
    ],
  };
  const outputOptions = {
    ...sharedOutputOptions,
  };
  return {
    inputOptions,
    outputOptions,
  };
};

const createIndex = async (jsPaths) => {
  const indexPath = 'lib/all.js';
  const indexContent = jsPaths.reduce(
    (prev, fileName) => `${prev}import './${fileName}';\n`,
    ''
  );
  await fs.writeFile(indexPath, indexContent);
  return indexPath;
};

const finalBundle = async (jsPaths) => {
  log('starting final js bundle');
  const entryPoints = [await createIndex(jsPaths)];
  await esbuild.build({
    entryPoints,
    bundle: true,
    splitting: false,
    format: 'esm',
    write: true,
    outfile: 'lib/bundle.js',
    logLevel: 'error',
    minify: process.env.NODE_ENV === 'production',
  });
  await del(entryPoints);
  log('finished final js bundle');
};

const bundleJs = async (jsPaths) => {
  log('starting js bundle');
  if (!jsPaths.length) return { output: [] };
  const { inputOptions, outputOptions } = await prepare(jsPaths);
  const bundle = await rollup.rollup(inputOptions);
  const { output } = await bundle.write(outputOptions);
  await bundle.close();
  log('finished js bundle');

  finalBundle(
    output.reduce((prev, curr) => {
      if (curr.isEntry) prev.push(curr.fileName);
      return prev;
    }, [])
  );

  return { output };
};

const watchJs = async (jsPaths) => {
  if (!jsPaths.length) return { output: [] };
  const { inputOptions, outputOptions } = await prepare(jsPaths);
  const watcher = rollup.watch({
    ...inputOptions,
    output: [outputOptions],
  });
  watcher.on('event', ({ result, code }) => {
    if (result) {
      result.close();
    }
    if (code === 'START') {
      log('starting js bundle');
    } else if (code === 'END') {
      log('finished js bundle');
    }
  });
};

module.exports = { bundleJs, watchJs };
