import { spawn, SpawnOptions } from 'node:child_process';
import path from 'node:path';
import yargsParser from 'yargs-parser';
import fg from 'fast-glob';
import createMarkdownStories from '@kickstartds/bundler/stories/createStoriesFromMarkdown';
import { root } from '@kickstartds/bundler/utils/utils';
import buildTokens from '@kickstartds/bundler/stories/build-tokens';

const argv = yargsParser(process.argv.slice(2));

const exec = (command: string, args: string[], options: SpawnOptions) =>
  new Promise((resolve, reject) => {
    spawn(command, args, { ...options, stdio: 'inherit' })
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
        return exec('storybook', ['build', ...storybookOptionsBuild], {});
      }

      case 'start': {
        return exec('storybook', ['dev', ...storybookOptionsStart], {});
      }

      case 'debug': {
        return exec(
          'storybook',
          ['dev', ...storybookOptionsStart, '--debug-webpack'],
          {}
        );
      }

      default: {
        return undefined;
      }
    }
  });
