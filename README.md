# kickstartDS

This project is managed by [lerna](https://lernajs.io/). Each module is an independent lerna package. Install module-specific dependencies only via `lerna add` (see "Install npm dependencies" section)!

## Requirements

### Environment

- [node](https://nodejs.org/en/) >= v14 – if you have [nvm](https://github.com/creationix/nvm#node-version-manager---) installed, you can just run `nvm use` to select the right node version.

- [yarn](https://classic.yarnpkg.com/lang/en/) classic

### Global npm packages

- [commitizen](http://commitizen.github.io/cz-cli/) – Constistent commit messages. Read more about the commit conventions in the "Commit changes"-section.

`npm install -g lerna commitizen`

If you cannot or don't want to install global packages, you can use yarn. E.g. instead of `git cz`, you can also call `yarn git-cz`.

## Locally

### Installation

- `yarn` - installs npm dependencies for all frontend modules

### Scripts

- `yarn build` – builds the pattern library
- `yarn storybook start` - starts a storybook with all components
- `yarn lint` – checks sass- & js-files against potential errors
- `yarn list` – lists all lerna packages

## Release

Releases are mangaged by [Auto](https://intuit.github.io/auto/index).

## Module Development

All modules are placed in the _pacakges/components_ directory. They are individual npm packages mangaged by [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces).

### Install npm dependencies

Don't install module dependencies manually, let yarn do the job!
E.g. to install "package-xy" in module "news", run `yarn workspace news add package-xy` in the projects root directory.

## Commit changes

This project uses [commitizen](http://commitizen.github.io/cz-cli/). So in order to commit your changes, run `git cz` (or `yarn git-cz` if commitizen is not installed globally) instead of `git commit`. commitizen will then ask you a few questions about the change:

- **type** – The type of the change (e.g. feature, fix, refactoring)
- **scope** - The name of the module affected (e.g. base, products, news)
- **ticket number** – The JIRA ticket id
- **subject** - Contains a succinct description of the change
  - use the imperative, present tense: "change" not "changed" nor "changes"
  - don't capitalize the first letter
  - no dot (.) at the end
- **body** - Just as in the subject, use the imperative, present tense. The body should include the motivation for the change and contrast this with previous behavior
- **breaking changes** – Description of the change, justification and migration notes

This convention is based loosely on the [angular commit message guidlines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines) and ensures constistent commit messages, so they can be automatically converted into a changelog.
