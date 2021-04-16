const { spawn } = require('child_process');
const cleanup = require('./scripts/cleanup-stories');
const createComponentStories = require('./scripts/create-stories-from-component');
const createMarkdownStories = require('./scripts/create-stories-from-markdown');
const createPreviewHead = require('./scripts/create-preview-head-from-assets');
const createPreviewBody = require('./scripts/create-preview-body');

const exec = (...args) =>
  new Promise((resolve, reject) => {
    spawn(...args, { stdio: 'inherit' })
      .on('exit', resolve)
      .on('error', reject);
  });

const storybookOptions = [
  '--config-dir',
  `${__dirname}/.storybook`,
  '--port',
  '3000',
  '--static-dir',
  './packages/@rm-frontend/instance/source',
];
const [, , task] = process.argv;

cleanup()
  .then(() =>
    Promise.all([
      createComponentStories(),
      createMarkdownStories(),
      createPreviewHead(),
      createPreviewBody(),
    ])
  )
  .then(() => {
    switch (task) {
      case 'build': {
        return exec('build-storybook', [...storybookOptions, '-o', 'dist']);
      }

      case 'start': {
        return exec('start-storybook', storybookOptions);
      }

      case 'debug': {
        return exec('start-storybook', [
          ...storybookOptions,
          '--debug-webpack',
        ]);
      }

      default: {
        return undefined;
      }
    }
  });
