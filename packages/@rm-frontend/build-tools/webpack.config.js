require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const { modules, modulesConfig } = require('./tasks/modules');
const rmConfig = require('./tasks/rmConfig');
const { resolve, resolveLoader } = require('./tasks/webpackResolver');

const mapReplace = (str, map) => {
  const matchStr = Object.keys(map).join('|');
  if (!matchStr) return str;
  const regexp = new RegExp(matchStr, 'g');
  return str.replace(regexp, (match) => map[match]);
};

const entry = modules.reduce((prev, curr) => {
  if (curr.entries.js) {
    prev[curr.name] = curr.entries.js;
  }
  return prev;
}, {});

const modulesWithApi = modules.filter((value) => value.hasApi).length;

const hashLength =
  process.env.NODE_ENV !== 'development' &&
  parseInt(process.env.JS_HASH_LENGTH, 10);

const createConfig = (subdir) => [
  {
    entry,

    output: {
      filename: hashLength ? '[name].[contenthash].js' : '[name].js',
      hashDigestLength: hashLength || 1,
      publicPath: `/${rmConfig.config.paths.publicJs}/${
        subdir ? `${subdir}/` : ''
      }`,
      path: path.resolve(
        rmConfig.temproot,
        rmConfig.config.paths.publicJs,
        subdir || ''
      ),
    },

    target: ['web', subdir === 'esm' ? 'es2015' : 'es5'],

    mode: process.env.NODE_ENV,

    module: {
      rules: [
        {
          test: /\.css$/,
          loader: 'null-loader',
        },
        {
          test: /\.[t|j]sx$/,
          use: [
            {
              loader: 'text-transform-loader',
              options: {
                prependText: "import h from 'vhtml';",
                transformText(content) {
                  // unfortunately, vhtml doesn't handle all special JSX attributes, so they have to be replaced manually
                  // https://github.com/developit/vhtml/blob/master/src/vhtml.js#L7 vs https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes
                  return mapReplace(content, {
                    xmlnsXlink: '"xmlns:xlink"',
                    xlinkHref: '"xlink:href"',
                    tabIndex: 'tabindex',
                  });
                },
              },
            },
          ],
        },
        {
          test: /\.[t|j]sx?$/,
          exclude: [
            /node_modules\/core-js/,
            /node_modules\/webpack/,
            /node_modules\/pikaday/,
            /node_modules\/pubsub-js/,
          ],
          use: [
            {
              loader: 'babel-loader',
              options: {
                envName: subdir || 'es5',
                configFile: `${__dirname}/.babelrc`,
                cacheDirectory: true,
              },
            },
            {
              loader: 'ifdef-loader',
              options: {
                env: process.env,
                modules: modulesConfig,
                paths: rmConfig.config.paths,
                target: subdir,
                'ifdef-verbose': false,
                'ifdef-triple-slash': false, // use double slash comment instead of default triple slash
              },
            },
          ],
        },
      ],
    },

    optimization: {
      moduleIds: 'deterministic',
      splitChunks: {
        cacheGroups: {
          defaultVendors: false,
          shared: {
            name: 'shared',
            chunks: 'all',
            minChunks: 2,
          },
        },
      },
      runtimeChunk: 'single',
      minimize: process.env.NODE_ENV !== 'development',
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
            output: {
              comments: false,
            },
          },
        }),
      ],
    },

    plugins: [
      // moment.js is an optional dependency of pikaday.
      // ignoring it removes the warning from the build log
      new webpack.IgnorePlugin({ resourceRegExp: /moment/ }),

      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: 'webpack-report.html',
      }),

      new webpack.DefinePlugin({
        'process.env.MODULES_WITH_API': JSON.stringify(modulesWithApi),
      }),
    ],

    resolve,
    resolveLoader,
  },
  subdir,
];

const configs = [];
if (process.env.RM_JS_MODULES === 'true') {
  configs.push(createConfig('esm'));
  if (process.env.NODE_ENV !== 'development') {
    configs.push(createConfig('es5'));
  }
} else {
  configs.push(createConfig());
}

module.exports = configs;
