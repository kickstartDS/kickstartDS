const path = require('path');
const esbuild = require('esbuild');
const { external } = require('./esbuild-plugins/external');
const { replace } = require('./esbuild-plugins/replace');
const log = require('./log');
const { root, dirRe } = require('./utils');

const production = process.env.NODE_ENV === 'production';
const prepare = (jsPaths) => ({
  entryPoints: Object.fromEntries(
    jsPaths.map((file) => {
      const [, dir, name] = file.match(dirRe);
      return [`${dir}/${name}`, file];
    })
  ),
  outdir: 'lib',
  bundle: true,
  format: 'esm',
  platform: 'browser',
  plugins: [
    external,
    replace({
      include: /\.tsx$/,
      values: {
        // unfortunately, vhtml doesn't handle all special JSX attributes, so they have to be replaced manually
        // https://github.com/developit/vhtml/blob/master/src/vhtml.js#L7 vs https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes
        xmlnsXlink: 'xmlns:xlink',
        xlinkHref: 'xlink:href',
        tabIndex: 'tabindex',
      },
    }),
  ],
  splitting: true,
  chunkNames: '_shared/[name]-[hash]',
  jsxFactory: 'vhtml',
  inject: [
    path.join(
      root,
      'packages/components/base/source/0-base/1-tools/js/vhtml-shim.js'
    ),
  ],
  metafile: true,
  minify: production,
});

const bundleJs = async (jsPaths) => {
  if (!jsPaths.length) return {};
  log('starting js bundle');
  const options = prepare(jsPaths);
  const output = await esbuild.build(options);
  log('finished js bundle');
  return output.metafile.outputs;
};

const watchJs = async (jsPaths) => {
  if (!jsPaths.length) return {};
  log('starting js bundle');
  const options = prepare(jsPaths);
  await esbuild.build({
    ...options,
    watch: {
      onRebuild(error) {
        if (!error) log('finished js bundle');
      },
    },
  });
  log('finished js bundle');
};

module.exports = { bundleJs, watchJs };
