const fs = require('fs-extra');
const path = require('path');
const rollup = require('rollup');
const { babel } = require('@rollup/plugin-babel');
const replace = require('replace-in-file');
const ts = require('rollup-plugin-ts');
const log = require('../utils/log');
const { root, dirRe, sourcePath } = require('../utils/utils');
const { pascalCase } = require('change-case');
const {
  sharedInputPlugins,
  sharedOutputOptions,
  sharedBabelConfig,
} = require('./rollupUtils');

const assetPaths = (paths = []) =>
  paths.map((assetPath) => `${sourcePath}/${assetPath}`);

const externalRe = {
  internal: /\.(js|scss)$/,
  external: /tslib/,
};

const babelConfig = sharedBabelConfig({
  presets: [['@babel/preset-react', { runtime: 'automatic' }]],
});

const declarations = [];
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
      const [, dir, basename] = file.match(dirRe);
      return [`${dir}/${basename}`, file];
    })
  );
  const inputOptions = {
    input,
    external: (id) => {
      if (externalRe.internal.test(id)) return !externalRe.external.test(id);
    },
    plugins: [
      ...sharedInputPlugins,
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
              allowJs: true,
              lib: ['dom', 'dom.iterable', 'es2020'],
              downlevelIteration: true,
              paths: {
                react: [`${root}/node_modules/@types/react`],
              },
            },
            hook: {
              outputPath: (path, kind) => {
                if (kind === 'declaration' && !declarations.includes(path))
                  declarations.push(path);

                return;
              },
            },
            babelConfig,
            browserslist: babelConfig.targets,
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
      if (path.isAbsolute(id) && id.indexOf('/node_modules/') === -1) {
        const [, dir, base, ext] = id.match(dirRe);
        if (ext === 'js') {
          jsAssets.add(id);
          return `${dir}/${base}.${ext}`;
        }
        if (ext === 'scss') {
          cssAssets.add(id);
          return `${dir}/${base}.css`;
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

function regExpEscape(literal_string) {
  return literal_string.replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, '\\$&');
}

const bundleTs = async (tsPaths) => {
  log('starting ts bundle');
  const { inputOptions, outputOptions, cssAssets, jsAssets } = await prepare(
    tsPaths
  );
  const bundle = await rollup.rollup(inputOptions);
  const { output } = await bundle.write(outputOptions);
  for (const out of Object.values(output)) {
    if (out.fileName.includes('/index.d.ts')) {
      const declaration = declarations.find((declaration) =>
        declaration.endsWith(out.fileName)
      );
      const regexComponentPath = new RegExp(/components\/(.*)\/index\.d\.ts/);
      const componentPath = declaration.match(regexComponentPath)[1];
      const componentName = pascalCase(componentPath.split('/').pop());
      const regexImport = new RegExp(
        regExpEscape('import("./typing.js")'),
        'g'
      );
      const regexComponent = new RegExp(
        regExpEscape('ForwardRefExoticComponent<any>;'),
        'g'
      );
      replace.sync({
        files: declaration,
        from: [regexImport, regexComponent],
        to: [
          `import("@kickstartds/${componentPath}/typing")`,
          `typeof ${componentName}ContextDefault;`,
        ],
      });
    }
  }
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
