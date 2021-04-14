require('dotenv').config();
const { parallel, series } = require('gulp');
const del = require('del');
require('./tasks/banner');
const { buildBasePaths, watchBasePaths } = require('./tasks/modules');
const rmConfig = require('./tasks/rmConfig');

const sourceGlob = (base) =>
  base.length > 1
    ? `${rmConfig.rootpath}/{${base.join(',')}}/source`
    : `${rmConfig.rootpath}/${base[0]}/source`;

const BUILD_PATHS = sourceGlob(buildBasePaths);
const WATCH_PATHS = sourceGlob(watchBasePaths);

const pattern = require('./tasks/pattern')(BUILD_PATHS, WATCH_PATHS);
const assets = require('./tasks/assets');
const js = require('./tasks/javascript')(WATCH_PATHS);
const { dereferenceAll } = require('./tasks/schemaDereference');

const createManifest = assets.manifest(js);
createManifest.displayName = 'rm-frontend: create assets manifest';

/* ~~~~~~~~ TASKS ~~~~~~~~ */

const clean = () =>
  del([
    rmConfig.temppath,
    `${rmConfig.temproot}/${rmConfig.config.paths.publicJs}`,
    `${rmConfig.temproot}/${rmConfig.config.paths.publicCss}`,
    `${rmConfig.temproot}/${rmConfig.config.paths.publicFonts}`,
    `${rmConfig.temproot}/${rmConfig.config.paths.images}`,
  ]);
clean.displayName = 'rm-frontend: clean';

const build = series(
  clean,
  pattern.init,
  parallel(dereferenceAll, assets.init, js.bundle),
  createManifest
);

const watch = parallel(pattern.watch, js.watch);

module.exports = {
  build,
  watch,
  clean,
};
