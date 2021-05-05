const { spawn } = require('child_process');
const argv = require('yargs-parser')(process.argv.slice(2));
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

const [task] = argv._;
const kdsModule = argv.module;

const storybookOptions = [
  '--config-dir',
  '.storybook',
  '--static-dir',
  '../../../legacy-instance',
];
const storybookOptionsBuild = [
  ...storybookOptions,
  '--output-dir',
  argv.outputDir || 'storybook-static',
];
const storybookOptionsStart = [...storybookOptions, '--port', '3000'];

cleanup()
  .then(() =>
    Promise.all([
      createComponentStories(kdsModule),
      createMarkdownStories(kdsModule),
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

      // TODO add a way to debug when using Vite
      case 'debug': {
        return exec('start-storybook', [
          ...storybookOptionsStart,
          // '--debug-webpack', // TODO remove this when done migrating to Vite
        ]);
      }

      default: {
        return undefined;
      }
    }
  });
