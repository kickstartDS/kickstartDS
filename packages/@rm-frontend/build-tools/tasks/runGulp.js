/* eslint-disable no-await-in-loop, no-restricted-syntax */
const { spawn } = require('child_process');
const glob = require('fast-glob');

const gulp = require.resolve('gulp/bin/gulp.js');

const exec = (...args) =>
  new Promise((resolve, reject) => {
    spawn(...args, { stdio: 'inherit' })
      .on('exit', resolve)
      .on('error', reject);
  });

module.exports = async (gulpfile) => {
  const [, , task, ...options] = process.argv;
  const rcs = new Set(
    options.length
      ? options
      : (await glob('.rm-frontendrc?(.*).js')).map(
          (file) => /.rm-frontendrc\.?(.*).js/.exec(file)[1] || 'default'
        )
  );

  process.env.RM_FRONTEND_RCS = Array.from(rcs).join(',');

  for (const rc of rcs) {
    process.env.RM_FRONTEND_RC = rc;
    await exec(gulp, ['--gulpfile', gulpfile, '--cwd', process.cwd(), task]);
  }
};
