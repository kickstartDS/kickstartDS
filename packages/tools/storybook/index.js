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
  '--static-dir',
  'legacy-instance',
];
const storybookOptionsBuild = [...storybookOptions, '--output-dir', 'dist'];
const storybookOptionsStart = [...storybookOptions, '--port', '3000'];
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
        return exec('build-storybook', storybookOptionsBuild);
      }

      case 'start': {
        return exec('start-storybook', storybookOptionsStart);
      }

      case 'debug': {
        return exec('start-storybook', [
          ...storybookOptionsStart,
          '--debug-webpack',
        ]);
      }

      default: {
        return undefined;
      }
    }
  });
