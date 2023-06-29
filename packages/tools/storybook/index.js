const { spawn } = require('child_process');
const path = require('path');
const argv = require('yargs-parser')(process.argv.slice(2));
const fg = require('fast-glob');
const createMarkdownStories = require('@kickstartds/bundler/stories/createStoriesFromMarkdown');
const { root } = require('@kickstartds/bundler/utils/utils');
const buildTokens = require('@kickstartds/bundler/stories/build-tokens');

const exec = (...args) =>
  new Promise((resolve, reject) => {
    spawn(...args, { stdio: 'inherit' })
      .on('exit', resolve)
      .on('error', reject);
  });

const [task] = argv._;
const kdsModule = argv.module;
const kdsModulesGlob = kdsModule ? `{${kdsModule},core}` : '*';
process.env.KDS_MODULES_GLOB = `${root}/packages/components/${kdsModulesGlob}`;

const kdsModules = fg(process.env.KDS_MODULES_GLOB, {
  onlyDirectories: true,
  cwd: '/',
  absolute: true,
}).then((modulePaths) =>
  modulePaths.map((modulePath) => [modulePath, path.basename(modulePath)])
);

const storybookOptions = ['--config-dir', '.storybook'];
const storybookOptionsBuild = [
  ...storybookOptions,
  '--output-dir',
  argv.outputDir || 'storybook-static',
];
const storybookOptionsStart = [...storybookOptions, '--port', '3000'];

kdsModules
  .then((resolvedModules) =>
    Promise.all([
      ...resolvedModules.map(([modPath, mod]) =>
        createMarkdownStories(modPath, mod)
      ),
      buildTokens(),
    ])
  )
  .then(() => {
    switch (task) {
      case 'build': {
        return exec('storybook', ['build', ...storybookOptionsBuild]);
      }

      case 'start': {
        return exec('storybook', ['dev', ...storybookOptionsStart]);
      }

      case 'debug': {
        return exec('storybook', [
          'dev',
          ...storybookOptionsStart,
          '--debug-webpack',
        ]);
      }

      default: {
        return undefined;
      }
    }
  });
