const rollup = require('rollup');
const { babel } = require('@rollup/plugin-babel');
const replace = require('@rollup/plugin-replace');
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
      babel(
        sharedBabelConfig({
          extensions: ['.js', '.tsx', '.ts'],
          babelHelpers: 'runtime',
          skipPreflightCheck: true,
          presets: [
            ['@babel/preset-react', { runtime: 'classic', pragma: 'html' }],
          ],
          plugins: [
            [
              '@wordpress/babel-plugin-import-jsx-pragma',
              {
                scopeVariable: 'html',
                source: 'vhtml',
                isDefault: true,
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
    preserveEntrySignatures: 'allow-extension',
  };
  const outputOptions = {
    ...sharedOutputOptions,
  };
  return {
    inputOptions,
    outputOptions,
  };
};

const bundleJs = async (jsPaths) => {
  if (!jsPaths.length) return { output: [] };
  log('starting js bundle');
  const { inputOptions, outputOptions } = await prepare(jsPaths);
  const bundle = await rollup.rollup(inputOptions);
  const { output } = await bundle.write(outputOptions);
  await bundle.close();
  log('finished js bundle');
  return { output };
};

const watchJs = async (jsPaths) => {
  if (!jsPaths.length) return { output: [] };
  const { inputOptions, outputOptions } = await prepare(jsPaths);
  const watcher = rollup.watch({
    ...inputOptions,
    output: [outputOptions],
  });
  watcher.on('event', ({ result, code, error }) => {
    if (result) {
      result.close();
    }

    // eslint-disable-next-line default-case
    switch (code) {
      case 'START':
        log('starting js bundle');
        break;

      case 'END':
        log('finished js bundle');
        break;

      case 'ERROR':
        console.error(error);
        break;
    }
  });
};

module.exports = { bundleJs, watchJs };
