const fs = require('fs-extra');
const rollup = require('rollup');
const ts = require('@wessberg/rollup-plugin-ts');
const merge = require('lodash/merge');
const { dirRe, sourcePath } = require('./utils');
const {
  sharedInputPlugins,
  sharedOutputOptions,
  sharedBabelConfig,
} = require('./rollupUtils');

const assetPaths = (paths = []) =>
  paths.map((assetPath) => `${sourcePath}/${assetPath}`);

module.exports = async function bundleTs(tsPaths) {
  const assets = await fs
    .readJSON(`${sourcePath}/assets.json`)
    .catch(() => ({}));
  const cssAssets = new Set(assetPaths(assets.css));
  const jsAssets = new Set(assetPaths(assets.js));

  const input = Object.fromEntries(
    tsPaths.map((file) => {
      const [, dir] = file.match(dirRe);
      return [`${dir}/index`, file];
    })
  );
  const externalRe = {
    scss: /\.scss$/,
    js: /\.js$/,
    tslib: /tslib/,
  };
  const inputOptions = {
    input,
    external: (id) => {
      if (externalRe.scss.test(id)) return true;
      if (externalRe.js.test(id)) return !externalRe.tslib.test(id);
    },
    plugins: [
      ...sharedInputPlugins,
      ts({
        transpiler: 'babel',
        tsconfig: {
          resolveJsonModule: true,
          jsx: 'react-jsx',
          esModuleInterop: true,
          declaration: true,
          target: 'ES6',
          moduleResolution: 'node',
        },
        babelConfig: merge({}, sharedBabelConfig, {
          presets: ['@babel/preset-react'],
        }),
      }),
    ],
  };
  const outputOptions = {
    ...sharedOutputOptions,
    paths(id) {
      if (id.indexOf('/packages/components/') !== -1) {
        const [, dir, base, ext] = id.match(dirRe);
        if (ext === 'scss') {
          cssAssets.add(id);
          return `${dir}/${base}.css`;
        }
        if (ext === 'js') {
          jsAssets.add(id);
          return `${dir}/${base}.${ext}`;
        }
      }
      return id;
    },
  };
  const bundle = await rollup.rollup(inputOptions);
  const { output } = await bundle.write(outputOptions);
  await bundle.close();
  return { output, cssAssets, jsAssets };
};
