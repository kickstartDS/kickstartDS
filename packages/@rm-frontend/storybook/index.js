const { spawn } = require('child_process');
const cleanup = require('./scripts/cleanup-stories');
const createReactStories = require('./scripts/create-react-stories-from-template');
const createPreviewHead = require('./scripts/create-preview-head-from-assets');
const createPreviewBody = require('./scripts/create-preview-body');

const exec = (...args) =>
  new Promise((resolve, reject) => {
    spawn(...args, { stdio: 'inherit' })
      .on('exit', resolve)
      .on('error', reject);
  });

const storybookOptions = ['-c', `${__dirname}/.storybook`, '-s', 'tmp'];

const [, , task] = process.argv;
process.env.RM_FRONTEND_RC = 'default';

switch (task) {
  case 'generate': {
    return cleanup().then(() =>
      Promise.all([
        createReactStories(),
        createPreviewHead(),
        createPreviewBody(),
      ])
    );
  }

  case 'build': {
    return exec('build-storybook', [...storybookOptions, '-o', 'dist']);
  }

  case 'start': {
    return exec('start-storybook', storybookOptions);
  }

  case 'debug': {
    return exec('start-storybook', [...storybookOptions, '--debug-webpack']);
  }

  default: {
    return undefined;
  }
}
