import fs from 'fs-extra';
import path from 'path';
import replace from 'replace-in-file';
import ts, { BrowserslistConfig } from 'rollup-plugin-ts';
import { rollup, RollupOptions, OutputOptions, watch } from 'rollup';
import { babel } from '@rollup/plugin-babel';
import { pascalCase } from 'change-case';
import log from '../utils/log.js';
import { root, dirRe, sourcePath } from '../utils/utils.js';
import {
  sharedInputPlugins,
  sharedOutputOptions,
  sharedBabelConfig,
} from './rollupUtils.js';

// TODO hack, should be removed once fixed upstream:
// https://github.com/adamreisnz/replace-in-file/issues/170
declare module 'replace-in-file' {
  export interface ReplaceInFileConfig {
    processor: (string) => string | [(string) => string];
  }
}

const assetPaths = (paths: string[] = []) =>
  paths.map((assetPath) => `${sourcePath}/${assetPath}`);

const externalRe = {
  internal: /\.(js|scss)$/,
  external: /tslib/,
};

const babelConfig = sharedBabelConfig({
  presets: [['@babel/preset-react', { runtime: 'automatic' }]],
});

let declarations: string[] = [];
const prepare = async (tsPaths: string[]) => {
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
  const inputOptions: RollupOptions = {
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
                '@kickstartds/base/lib/*/typing': [
                  `${root}/packages/components/base/source/*/typing`,
                ],
                '@kickstartds/blog/lib/*/typing': [
                  `${root}/packages/components/blog/source/*/typing`,
                ],
                '@kickstartds/core/lib/*/typing': [
                  `${root}/packages/components/core/source/*/typing`,
                ],
                '@kickstartds/form/lib/*/typing': [
                  `${root}/packages/components/form/source/*/typing`,
                ],
                '@kickstartds/content/lib/*/typing': [
                  `${root}/source/*/typing`,
                ],
                '@kickstartds/blog/lib/news-item/typing': [
                  `${root}/packages/components/blog/source/shared/typing`,
                ],
                '@kickstartds/base/lib/media-video/typing': [
                  `${root}/packages/components/base/source/text-media/MediaVideoProps`,
                ],
                '@kickstartds/base/lib/media-image/typing': [
                  `${root}/packages/components/base/source/text-media/MediaImageProps`,
                ],
                '@kickstartds/base/lib/media-lazy-image/typing': [
                  `${root}/packages/components/base/source/text-media/MediaLazyImageProps`,
                ],
              },
            },
            hook: {
              outputPath: (path, kind) => {
                if (kind === 'declaration' && !declarations.includes(path))
                  declarations.push(path);

                return path;
              },
            },
            babelConfig,
            browserslist: babelConfig.targets as BrowserslistConfig,
          })
        : babel({
            ...babelConfig,
            babelHelpers: 'runtime',
            extensions: ['.js', '.ts', '.tsx'],
            skipPreflightCheck: true,
          }),
    ],
  };
  const outputOptions: OutputOptions = {
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

const fixImportPaths = (
  line: string,
  componentModule: string,
  componentPath: string
): string =>
  line
    .replace(
      'import("./typing.js")',
      `import("@kickstartds/${componentModule}/lib/${componentPath}/typing")`
    )
    .replace(
      /import\("\.\.\/(.*)\/typing\.js"\)/,
      `import("@kickstartds/${componentModule}/lib/$1/typing")`
    );

const bundleTs = async (tsPaths: string[]) => {
  log('starting ts bundle');
  const { inputOptions, outputOptions, cssAssets, jsAssets } = await prepare(
    tsPaths
  );
  const kdsModules = ['core', 'base', 'blog', 'form'];
  const bundle = await rollup(inputOptions);
  const { output } = await bundle.write(outputOptions);
  for (const out of Object.values(output)) {
    if (out.fileName.includes('/index.d.ts')) {
      const declaration = declarations.find((declaration) =>
        declaration.endsWith(out.fileName)
      );
      const regexComponentPath = new RegExp(
        /\/([a-zA-Z0-9-_]+)\/lib\/([a-zA-Z0-9-_]+)\/index\.d\.ts/
      );
      const matches = declaration.match(regexComponentPath);
      const componentModule = kdsModules.includes(matches[1])
        ? matches[1]
        : 'content';
      const componentPath = matches[2];
      const componentName = pascalCase(componentPath);
      // TODO remove "hack" when this is fixed upstream:
      // https://github.com/adamreisnz/replace-in-file/issues/170
      replace.sync({
        files: declaration,
        from: 'THIS WILL NEVER MATCH',
        to: 'SO IT WILL DO NOTHING',
        processor: (input: string) => {
          const lines = input.split(/\r?\n/);

          let componentTypeLines: string[] = [];
          let componentTypeLinesDone = true;
          const replaced: string = lines
            .map((line) => {
              if (
                line.includes(
                  `declare const ${componentName}ContextDefault:`
                ) ||
                !componentTypeLinesDone
              ) {
                componentTypeLines.push(
                  fixImportPaths(line, componentModule, componentPath).replace(
                    'ContextDefault',
                    ''
                  )
                );
                componentTypeLinesDone =
                  line.endsWith(';') && !line.startsWith('  ');
                return line;
              } else if (line.includes(`declare const ${componentName}:`)) {
                return componentTypeLines.join('\n');
              }
              return fixImportPaths(line, componentModule, componentPath);
            })
            .join('\n');

          return replaced;
        },
      });
    }
  }
  await bundle.close();
  log('finished ts bundle');
  return { output, cssAssets, jsAssets };
};

const watchTs = async (
  tsPaths: string[]
): Promise<{ cssAssets: Set<string>; jsAssets: Set<string> }> => {
  const { inputOptions, outputOptions, cssAssets, jsAssets } = await prepare(
    tsPaths
  );
  const watcher = watch({
    ...inputOptions,
    output: [outputOptions],
  });
  return new Promise((resolve) => {
    watcher.on('event', (event) => {
      switch (event.code) {
        case 'BUNDLE_END':
          if (event.result) event.result.close();
          break;

        case 'START':
          log('starting ts bundle');
          break;

        case 'END':
          log('finished ts bundle');
          resolve({ cssAssets, jsAssets });
          break;

        case 'ERROR':
          console.error(event.error);
          break;
      }
    });
  });
};

export { bundleTs, watchTs };
