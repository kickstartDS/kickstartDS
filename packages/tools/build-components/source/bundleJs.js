const rollup = require('rollup');
const { babel } = require('@rollup/plugin-babel');
const replace = require('@rollup/plugin-replace');
const importResolver = require('rollup-plugin-import-resolver');
const merge = require('lodash/merge');
const { dirRe } = require('./utils');
const {
  sharedInputPlugins,
  sharedOutputOptions,
  sharedBabelConfig,
} = require('./rollupUtils');

module.exports = async function bundleJs(jsPaths) {
  if (!jsPaths.length) return { output: [] };

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
  const bundle = await rollup.rollup(inputOptions);
  const { output } = await bundle.write(outputOptions);
  await bundle.close();
  return { output };
};
