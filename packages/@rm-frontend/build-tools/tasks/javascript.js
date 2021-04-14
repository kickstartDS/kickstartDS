const webpack = require('webpack');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const { cosmiconfigSync } = require('cosmiconfig');
const webpackConfigs = require('../webpack.config');
const rmConfig = require('./rmConfig');

const eslintConfig = cosmiconfigSync('eslint').search();
const jsFiles =
  process.env.RM_JS_MODULES === 'true' ? { es5: [], esm: [] } : [];

const compiledFileNames = () => ({ js: jsFiles });

const processWebpackResult = (stats, subdir) => {
  // print out webpack warings & errors
  const out = stats.toString({
    all: false,
    // chunks: true,
    performance: true,
    warnings: true,
    errors: true,
    colors: true,
  });
  if (out.length) console.log(out);

  stats.compilation.chunks.forEach((chunk) => {
    if (chunk.canBeInitial()) {
      const [file] = Array.from(chunk.files);
      if (subdir) {
        jsFiles[subdir].push(
          `/${rmConfig.config.paths.publicJs}/${subdir}/${file}`
        );
      } else {
        jsFiles.push(`/${rmConfig.config.paths.publicJs}/${file}`);
      }
    }
  });
};

const bundle = () =>
  Promise.all(
    webpackConfigs.map(
      ([config, subdir]) =>
        new Promise((resolve, reject) => {
          webpack(config, (err, stats) => {
            if (err) reject(err);
            processWebpackResult(stats, subdir);
            resolve();
          });
        })
    )
  );
bundle.displayName = 'rm-frontend: js bundle';

const lint = (glob) =>
  gulp
    .src(glob, { since: gulp.lastRun(lint) })
    .pipe(eslint())
    .pipe(eslint.formatEach());
lint.displayName = 'rm-frontend: js lint';

module.exports = (WATCH_PATHS) => {
  const watch = () =>
    gulp
      .watch(
        [`${WATCH_PATHS}/**/*.js`, `${rmConfig.instancepath}/source/**/*.js`],
        bundle
      )
      .on('all', (event, glob) => {
        console.log(
          `ℹ︎ ${event}: ${glob.replace(`${rmConfig.rootpath}/`, '')}`
        );

        if (eslintConfig && !event.startsWith('unlink')) {
          lint(glob);
        }
      });
  watch.displayName = 'rm-frontend: js watch';

  return {
    bundle,
    watch,
    compiledFileNames,
  };
};
