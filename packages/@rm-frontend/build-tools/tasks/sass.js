require('dotenv').config();
const gulp = require('gulp');
const sass = require('sass');
const gulpSass = require('gulp-sass');
const stylelint = require('gulp-stylelint');
const rename = require('gulp-rename');
// const filter = require('gulp-filter');
// const hash = require('gulp-hash-filename');
const { cosmiconfigSync } = require('cosmiconfig');
const { dirname, parse, join } = require('path');
const { statSync } = require('fs');
const resolve = require('resolve');
// const postCss = require('./postcss');
// const { whitePlugin } = require('./gulpPlugins');
const functions = require('./sassFunctions');
const rmConfig = require('./rmConfig');
const { modules } = require('./modules');
const stripSourcePath = require('./stripSourcePath');

const stylelintConfig = cosmiconfigSync('stylelint').search();

// const destDir = `${rmConfig.temproot}/${rmConfig.config.paths.publicCss}`;

gulpSass.compiler = sass;

const config = {
  stylelint: {
    syntax: 'scss',
    reporters: [{ formatter: 'string', console: true }],
    failAfterError: false,
    debug: true,
  },
};

const isDev = process.env.NODE_ENV === 'development';
// const hashLength = !isDev && parseInt(process.env.CSS_HASH_LENGTH, 10);
const entries = modules.map((mod) =>
  join(rmConfig.rootpath, mod.path, 'source/**/!(_)*.scss')
);
const isMonorepo = (() => {
  try {
    return !!statSync(join(rmConfig.rootpath, 'lerna.json'));
  } catch (err) {
    return false;
  }
})();
const includePaths = [
  ...(isMonorepo
    ? [`${rmConfig.rootpath}/packages`, `${rmConfig.rootpath}/node_modules`]
    : []),
  `${rmConfig.instancepath}/source`,
];
const importer = isMonorepo
  ? () => null
  : (url, prev) => {
      if (/^(settings|fonts|\.)/.test(url)) {
        return null;
      }
      const file = resolve.sync(url, {
        basedir: dirname(prev),
        extensions: ['.scss', '.css'],
        pathFilter(pkg, path, relativePath) {
          const { dir, ext } = parse(path);
          if (!ext) {
            try {
              const { name, dir: relDir } = parse(relativePath);
              const tryPath = join(dir, `_${name}.scss`);
              statSync(tryPath);
              return join(relDir, `_${name}.scss`);
              // eslint-disable-next-line no-empty
            } catch (err) {}
          }
          return relativePath;
        },
      });
      return file ? { file } : null;
    };

const compileSass = () =>
  gulp
    .src(entries)
    // NOTE: currently it's faster to run sass synchronously. please recheck if sass gets updated
    .pipe(
      gulpSass
        .sync({ includePaths, functions, importer })
        .on('error', gulpSass.logError)
    )
    .pipe(
      rename((path) => {
        path.dirname = stripSourcePath(path.dirname);
      })
    )
    .pipe(gulp.dest((file) => file.base));

// const saveCss = () => gulp.dest(destDir, { sourcemaps: '.' });

const restFiles = new Set();
// const compileRest = () =>
//   compileSass()
//     .pipe(isDev ? postCss.devRest() : postCss.prodRest())
//     .pipe(
//       hash({
//         format: hashLength ? `{name}.{hash:${hashLength}}{ext}` : '{name}{ext}',
//       })
//     )
//     .pipe(
//       whitePlugin((file) => {
//         restFiles.add(file.basename);
//       })
//     )
//     .pipe(saveCss());
// compileRest.displayName = 'rm-frontend: compile rest css';

const criticalFiles = new Set();
// const compileCritical = () =>
//   compileSass()
//     .pipe(isDev ? postCss.devCritical() : postCss.prodCritical())
//     .pipe(filter((file) => file.contents.length))
//     .pipe(
//       hash({
//         format: hashLength
//           ? `{name}.{hash:${hashLength}}.inline{ext}`
//           : '{name}.inline{ext}',
//       })
//     )
//     .pipe(
//       whitePlugin((file) => {
//         criticalFiles.add(file.basename);
//       })
//     )
//     .pipe(saveCss());
// compileCritical.displayName = 'rm-frontend: compile critical css';

const compiledFileNames = () => ({
  css: {
    critical: [...criticalFiles].map(
      (n) => `/${rmConfig.config.paths.publicCss}/${n}`
    ),
    rest: [...restFiles].map((n) => `/${rmConfig.config.paths.publicCss}/${n}`),
  },
});

const compile = compileSass;

const lint = (glob) =>
  gulp
    .src(glob, { since: gulp.lastRun(lint) })
    .pipe(stylelint(config.stylelint));
lint.displayName = 'rm-frontend: lint scss';

module.exports = (WATCH_PATHS) => {
  const watch = () =>
    gulp
      .watch(
        [
          `${WATCH_PATHS}/**/*.scss`,
          `${rmConfig.instancepath}/source/**/*.scss`,
        ],
        compile
      )
      .on('all', (event, glob) => {
        console.log(
          `ℹ︎ ${event}: ${glob.replace(`${rmConfig.rootpath}/`, '')}`
        );

        if (stylelintConfig && !event.startsWith('unlink')) {
          lint(glob);
        }
      });
  watch.displayName = 'rm-frontend: watch scss';

  return {
    compile,
    watch,
    compiledFileNames,
  };
};
