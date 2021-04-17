const fg = require('fast-glob');
const fs = require('fs-extra');
const rollup = require('rollup');
const json = require('@rollup/plugin-json');
const externals = require('rollup-plugin-node-externals');
const ts = require('@wessberg/rollup-plugin-ts');
const { dirRe, sourcePath } = require('./utils');
const scss = require('./scss');

const sharedInputPlugins = [json(), externals({ deps: true })];
const sharedOutputOptions = {
  dir: 'lib',
  format: 'es',
  chunkFileNames: '_shared/[name]-[hash].js',
};

const exportsFromRollupOutput = (output) =>
  output.reduce((prev, { isEntry, fileName, exports }) => {
    if (isEntry) {
      const [dir, name] = fileName.split('/');
      prev.set(`${dir}/${name}`, exports);
    }
    return prev;
  }, new Map());

async function bundleJs(jsPaths) {
  if (!jsPaths.length) return { output: [] };

  const input = Object.fromEntries(
    jsPaths.map((file) => {
      const [, dir, name] = file.match(dirRe);
      return [`${dir}/${name}`, file];
    })
  );
  const inputOptions = {
    input,
    plugins: [...sharedInputPlugins],
  };
  const outputOptions = {
    ...sharedOutputOptions,
  };
  const bundle = await rollup.rollup(inputOptions);
  const { output } = await bundle.write(outputOptions);
  await bundle.close();
  return { output };
}

const assetPaths = (paths = []) =>
  paths.map((assetPath) => `${sourcePath}/${assetPath}`);

async function bundleTs(tsPaths) {
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
        tsconfig: {
          resolveJsonModule: true,
          jsx: 'react-jsx',
          esModuleInterop: true,
          declaration: true,
          target: 'ES6',
          moduleResolution: 'node',
        },
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
}

module.exports = async function () {
  try {
    const tsPaths = await fg('source/**/index.ts');
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
