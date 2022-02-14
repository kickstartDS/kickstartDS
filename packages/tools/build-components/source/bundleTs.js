const fs = require('fs-extra');
const rollup = require('rollup');
const { babel } = require('@rollup/plugin-babel');
const ts = require('rollup-plugin-ts');
const styles = require('rollup-plugin-styles');
const log = require('./log');
const { dirRe, sourcePath } = require('./utils');
const {
  sharedInputPlugins,
  sharedOutputOptions,
  sharedBabelConfig,
} = require('./rollupUtils');
const sassOptions = require('./sassOptions');
const postcssPlugins = require('./postcssPlugins');

const assetPaths = (paths = []) =>
  paths.map((assetPath) => `${sourcePath}/${assetPath}`);

const externalRe = {
  js: /\.js$/,
  exclude: /(tslib|rollup-plugin-styles)/,
};

const babelConfig = sharedBabelConfig({
  presets: [['@babel/preset-react', { runtime: 'automatic' }]],
});

const prepare = async (tsPaths) => {
  const assets = await fs
    .readJSON(`${sourcePath}/assets.json`)
    .catch(() => ({}));
  const cssAssets = new Set(assetPaths(assets.css));
  const jsAssets = new Set(assetPaths(assets.js));

  const input = Object.fromEntries(
    tsPaths.map((file) => {
      if (file === 'source/index.ts') {
        return ['index', file];
      }
      const [, dir] = file.match(dirRe);
      return [`${dir}/index`, file];
    })
  );
  const inputOptions = {
    input,
    external: (id) => {
      if (externalRe.js.test(id)) return !externalRe.exclude.test(id);
    },
    plugins: [
      ...sharedInputPlugins,
      styles({
        config: false,
        mode: ['inject', { prepend: true }],
        sass: sassOptions,
        plugins: postcssPlugins,
        url: false,
        onImport(data, id) {
          cssAssets.add(id);
        },
      }),
      process.env.NODE_ENV === 'production'
        ? ts({
            transpiler: 'babel',
            tsconfig: {
              resolveJsonModule: true,
              jsx: 'react-jsx',
              esModuleInterop: true,
              declaration: true,
              target: 'ES6',
              moduleResolution: 'node',
            },
            babelConfig,
          })
        : babel({
            ...babelConfig,
            babelHelpers: 'runtime',
            extensions: ['.js', '.ts', '.tsx'],
            skipPreflightCheck: true,
          }),
    ],
  };
  const outputOptions = {
    ...sharedOutputOptions,
    paths(id) {
      if (id.indexOf('/packages/components/') !== -1) {
        const [, dir, base, ext] = id.match(dirRe);
        if (ext === 'js') {
          jsAssets.add(id);
          return `${dir}/${base}.${ext}`;
        }
      }
      return id;
    },
  };

  return {
    inputOptions,
    outputOptions,
    cssAssets,
    jsAssets,
  };
};

const bundleTs = async (tsPaths) => {
  log('starting ts bundle');
  const { inputOptions, outputOptions, cssAssets, jsAssets } = await prepare(
    tsPaths
  );
  const bundle = await rollup.rollup(inputOptions);
  const { output } = await bundle.write(outputOptions);
  await bundle.close();
  log('finished ts bundle');
  return { output, cssAssets, jsAssets };
};

const watchTs = async (tsPaths) => {
  const { inputOptions, outputOptions, cssAssets, jsAssets } = await prepare(
    tsPaths
  );
  const watcher = rollup.watch({
    ...inputOptions,
    output: [outputOptions],
  });
  return new Promise((resolve) => {
    watcher.on('event', ({ result, code, error }) => {
      if (result) {
        result.close();
      }

      // eslint-disable-next-line default-case
      switch (code) {
        case 'START':
          log('starting ts bundle');
          break;

        case 'END':
          log('finished ts bundle');
          resolve({ cssAssets, jsAssets });
          break;

        case 'ERROR':
          console.error(error);
          break;
      }
    });
  });
};

module.exports = {
  bundleTs,
  watchTs,
};
