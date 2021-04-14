/* eslint-disable no-console */
const execa = require('execa');
const changeCase = require('change-case');

const cwd = process.cwd();
const listModules = async () => {
  const { stdout } = await execa('npx', ['lerna', 'list'], { cwd });
  return stdout.split('\n');
};

module.exports = (plop) => {
  plop.setGenerator('module', {
    description: 'Create a new module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'module name',
        filter: (answer) => answer.trim(),
        validate: (answer) => !!answer.length,
      },
      {
        type: 'checkbox',
        name: 'dependencies',
        message: 'dependencies',
        choices: listModules,
      },
      {
        type: 'confirm',
        name: 'module',
        message: 'is this a module?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'continue',
        message: 'ready?',
        default: true,
      },
    ],
    actions: (data) => {
      if (!data.continue) return [];

      data.year = new Date().getFullYear();
      data.name = changeCase.paramCase(data.name);
      return [
        {
          type: 'addMany',
          destination: 'packages/@rm-frontend/{{name}}/',
          templateFiles: 'plop-templates/*',
          base: 'plop-templates',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: 'packages/@rm-frontend/{{name}}/source/{{name}}.js',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: 'packages/@rm-frontend/{{name}}/source/{{name}}.scss',
          skipIfExists: true,
        },
        async () => {
          // eslint-disable-next-line no-restricted-syntax
          for (const dependency of data.dependencies) {
            console.log(`Adding ${dependency}...`);
            // eslint-disable-next-line no-await-in-loop
            await execa(
              'npx',
              [
                'lerna',
                'add',
                dependency,
                `packages/@rm-frontend/${data.name}`,
              ],
              { cwd }
            );
          }
          return `${data.dependencies.length} dependencies added`;
        },
      ];
    },
  });
};
