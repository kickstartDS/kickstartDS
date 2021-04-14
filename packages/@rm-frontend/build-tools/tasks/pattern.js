const gulp = require('gulp');
const del = require('del');
const rename = require('gulp-rename');
const tap = require('gulp-tap');
const filter = require('gulp-filter');
const eslint = require('gulp-eslint');
const { cosmiconfigSync } = require('cosmiconfig');
const fg = require('fast-glob');
const stripSourcePath = require('./stripSourcePath');
const rmConfig = require('./rmConfig');
const { modulesConfig } = require('./modules');
const { dereference } = require('./schemaDereference');

const eslintConfig = cosmiconfigSync('eslint').search();

const schemaRe = /\/([\w-]+)\/source\/\d-([\w]+)\/.*\/_?([\w-]+)\.schema.json/;
const schemaCache = new Map();
const copy = (glob, base) =>
  gulp
    .src(glob, { base, since: gulp.lastRun(copy) })
    .pipe(
      filter((file) => {
        let include = true;
        if (schemaCache.has(file.dirname)) {
          include = schemaCache.get(file.dirname);
        } else {
          const [schema] = fg.sync(`${file.dirname}/*.schema.json`);
          if (schema) {
            const [, module, group, name] = schema.match(schemaRe);
            include = !!(
              modulesConfig[module] &&
              modulesConfig[module][group] &&
              modulesConfig[module][group][name]
            );
          }
          schemaCache.set(file.dirname, include);
        }
        return include;
      })
    )
    .pipe(
      rename((path) => {
        path.dirname = stripSourcePath(path.dirname);
      })
    )
    .pipe(gulp.dest(`${rmConfig.temppath}/patterns`));
copy.displayName = 'rm-frontend: copy pattern';

const lint = (glob) =>
  gulp
    .src(glob, { since: gulp.lastRun(lint) })
    .pipe(eslint())
    .pipe(eslint.formatEach());
lint.displayName = 'rm-frontend: tsx lint';

module.exports = (BUILD_PATHS, WATCH_PATHS) => {
  const copyPatterns = () =>
    copy(`${BUILD_PATHS}/**/*.{md,json,ts,tsx,css}`, BUILD_PATHS);
  copyPatterns.displayName = 'rm-frontend: copy patterns';

  const init = copyPatterns;

  const watch = () =>
    gulp
      .watch(`${WATCH_PATHS}/**/*.{md,json,ts,tsx,css}`)
      .on('all', (event, glob) => {
        console.log(
          `ℹ︎ ${event}: ${glob.replace(`${rmConfig.rootpath}/`, '')}`
        );
        if (event.startsWith('unlink')) {
          return del(`${rmConfig.temppath}/patterns/${stripSourcePath(glob)}`);
        }

        if (eslintConfig && glob.endsWith('.tsx')) {
          lint(glob);
        }

        return copy(glob, WATCH_PATHS).pipe(
          tap((file) => {
            if (
              file.basename.endsWith('.schema.json') ||
              file.basename.endsWith('.definitions.json')
            ) {
              dereference(file.path);
            }
          })
        );
      });
  watch.displayName = 'rm-frontend: watch patterns';

  return { init, watch };
};
