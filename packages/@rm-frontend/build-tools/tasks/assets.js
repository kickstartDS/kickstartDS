const { ensureDirSync } = require('fs-extra');
const gulp = require('gulp');
const rename = require('gulp-rename');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');
const { whitePlugin, fakeFileStream } = require('./gulpPlugins');
const rmConfig = require('./rmConfig');

const instancePath = `${rmConfig.instancepath}/source`;

const imageGlob = `${instancePath}/images/**/*`;
const fontsGlob = [`${instancePath}/fonts/**/*`, '!**/*.{scss,md}'];

const copy = (src, dest) =>
  gulp.src(src, { since: gulp.lastRun(copy) }).pipe(gulp.dest(dest));

const copyImages = (src) =>
  copy(src, `${rmConfig.temproot}/${rmConfig.config.paths.publicImages}`);

const copyBuildImages = () => copyImages(imageGlob);
copyBuildImages.displayName = 'rm-frontend: copy images';

const copyFonts = () => {
  ensureDirSync(`${rmConfig.temproot}/${rmConfig.config.paths.publicFonts}`);
  return copy(
    fontsGlob,
    `${rmConfig.temproot}/${rmConfig.config.paths.publicFonts}`
  );
};
copyFonts.displayName = 'rm-frontend: copy fonts';

const createIconSprite = () => {
  const icons = new Set();
  const svgSprite = () =>
    gulp
      .src(`${instancePath}/icons/[^_]*.svg`)
      .pipe(whitePlugin((file) => icons.add(file.stem)))
      .pipe(
        rename((file) => {
          file.basename = `icon-${file.basename}`;
        })
      )
      .pipe(
        svgmin({
          plugins: [{ removeViewBox: false }, { removeDimensions: true }],
        })
      )
      .pipe(svgstore({ inlineSvg: true }))
      .pipe(
        whitePlugin((oldFile) => {
          const newFile = oldFile;
          const oldContent = oldFile.contents.toString();
          const newContent = oldContent.replace(
            '<svg',
            '<svg hidden height="0" width="0"'
          );
          newFile.contents = Buffer.from(newContent);
          return newFile;
        })
      )
      .pipe(rename('icon-sprite.hbs'))
      .pipe(gulp.dest(`${rmConfig.temppath}/patterns/1-atoms/icon`));
  svgSprite.displayName = 'rm-frontend: create icon sprite';

  const addIconData = () =>
    fakeFileStream('data.json', JSON.stringify({ icons: [...icons] })).pipe(
      gulp.dest(`${rmConfig.temppath}/patterns/1-atoms/icon`)
    );
  addIconData.displayName = 'rm-frontend: add icons to data.json';

  return gulp.series(svgSprite, addIconData);
};

const init = gulp.parallel(copyBuildImages, copyFonts, createIconSprite());

const manifest = (js) => () =>
  fakeFileStream(
    'asset-paths.json',
    JSON.stringify(
      {
        ...js.compiledFileNames(),
      },
      null,
      2
    )
  ).pipe(gulp.dest(rmConfig.temppath));

module.exports = { init, manifest };
