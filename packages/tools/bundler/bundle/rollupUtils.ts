import mergeWith from 'lodash/mergeWith.js';
import importResolver from 'rollup-plugin-import-resolver';
import { terser } from 'rollup-plugin-terser';
import { externals } from 'rollup-plugin-node-externals';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { RollupBabelInputPluginOptions } from '@rollup/plugin-babel';
import { Plugin, OutputOptions } from 'rollup';

const production: boolean = process.env.NODE_ENV === 'production';

function customizer(objValue: any, srcValue: any): any[] | undefined {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

export const sharedInputPlugins: Plugin[] = [
  externals({
    exclude: ['@glidejs/glide'],
  }),
  nodeResolve({
    extensions: ['.js', '.tsx', '.ts'],
  }),
  importResolver({
    extensions: ['.js', '.ts', '.tsx'],
  }),
];

export const strictDeprecations = true;

export const sharedOutputOptions: OutputOptions = {
  dir: 'lib',
  format: 'es',
  chunkFileNames: '_shared/[name]-[hash].js',
  plugins: [
    production &&
      terser({
        safari10: true,
        keep_classnames: true,
        module: true,
        compress: {
          // quickfix to work around a swc bug: https://github.com/swc-project/swc/issues/5608
          join_vars: false,
        },
      }),
  ].filter(Boolean),
};

export const sharedBabelConfig = (
  config: Partial<RollupBabelInputPluginOptions> = {}
): RollupBabelInputPluginOptions =>
  mergeWith(
    {
      babelrc: false,
      assumptions: {
        // https://babeljs.io/docs/en/assumptions
        constantReexports: true,
        constantSuper: true,
        enumerableModuleMeta: true,
        ignoreFunctionLength: true,
        ignoreToPrimitiveHint: true,
        mutableTemplateObject: true,
        noClassCalls: true,
        noDocumentAll: true,
        noIncompleteNsImportDetection: true,
        noNewArrows: true,
        setComputedProperties: true,
      },
      targets: 'defaults, last 2 years',
      presets: [
        ['@babel/preset-env', { bugfixes: true, targets: { esmodules: true } }],
        ['@babel/preset-typescript'],
      ],
      plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
    },
    config,
    customizer
  );
