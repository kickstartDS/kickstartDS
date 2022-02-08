const { spawn } = require('child_process');
const argv = require('yargs-parser')(process.argv.slice(2));
const cleanup = require('./scripts/cleanup-stories');
const createMarkdownStories = require('./scripts/create-stories-from-markdown');
const createPreviewHead = require('./scripts/create-preview-head-from-assets');

const exec = (...args) =>
  new Promise((resolve, reject) => {
    spawn(...args, { stdio: 'inherit' })
      .on('exit', resolve)
      .on('error', reject);
  });

const [task] = argv._;
const kdsModule = argv.module;
const kdsModules = kdsModule ? `{${kdsModule},core}` : '*';
process.env.KDS_MODULES = kdsModules;

const storybookOptions = ['--config-dir', '.storybook'];
const storybookOptionsBuild = [
  ...storybookOptions,
  '--output-dir',
  argv.outputDir || 'storybook-static',
];
const storybookOptionsStart = [...storybookOptions, '--port', '3000'];

cleanup()
  .then(() =>
    Promise.all([createMarkdownStories(kdsModules), createPreviewHead()])
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
