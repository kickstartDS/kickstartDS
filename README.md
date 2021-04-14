# ruhmesmeile Frontend

This project is managed by [lerna](https://lernajs.io/). Each module is an independent lerna package. Install module-specific dependencies only via `lerna add` (see "Install npm dependencies" section)!

## Requirements

### Environment

- [node](https://nodejs.org/en/) >= v12 – if you have [nvm](https://github.com/creationix/nvm#node-version-manager---) installed, you can just run `nvm use` to select the right node version.

### Global npm packages

- [lerna](https://lernajs.io/) - The monorepo manager.
- [commitizen](http://commitizen.github.io/cz-cli/) – Constistent commit messages. Read more about the commit conventions in the "Commit changes"-section.

`npm install -g lerna commitizen`

If you cannot or don't want to install global packages, you can use [`npx`](https://www.npmjs.com/package/npx). E.g. instead of `git cz`, you can also call `npx git-cz`.

## Locally

### Installation

- Your NPM registry has to be set to ruhmesmeile's private registry.  
  `npm get registry` should print `https://verdaccio.ruhmesmeile.tools`  
  Otherwise run `npm set registry https://verdaccio.ruhmesmeile.tools`

- You have to be logged in.  
  `npm whoami` should print your user name  
  Otherwise run `npm login`

- `npm install` – installs npm dependencies and performs some post-install-scripts
- `lerna bootstrap` or `npm run bootstrap` - installs npm dependencies for all frontend modules

### Scripts

- `npm start` – builds the pattern library, starts a local dev-server on <http://127.0.0.1:3000> and watches for changes
- `npm run build` – builds the pattern library
- `npm run lint` – checks sass- & js-files against potential errors
- `npm run list` – lists all lerna packages

## Module Development

All modules are placed in the _modules_ directory. They are individual npm packages mangaged by [lerna](https://lernajs.io/).

### Add Module

- run `npm run create` and follow the cli wizzard.
- import all component's scss-files into the module's root scss-file, same for the js-file

Also see "Install npm dependencies"-section.

### File Structure

The file structure of each module is a mix of [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) and [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/):

- **package-lock.json** - (If there are 3rd-party-dependencies)
- **package.json**
- **README.md**
- **source**
  - **0-base**
    - **0-settings** – This is where all module settings are located. Here you will define colors, font sizes, font families, etc.
    - **1-tools** – Here you define mixins, functions & helpers.
    - **2-generic** – Normalize, resets, vertical rhythm & box-sizing definitions would live here.
    - **3-objects** – Style agnostic objects like the media-object, grid systems, etc. (ideally prefixed with `o-`)
    - **4-utilities** – Helper classes which override everyting stated before. (ideally prefixed with `u-`)
  - **1-atoms** – Basic unclassed HTML elements and everything that cannot be made smaller.
  - **2-molecules** – Combinations of atoms, components with disctint functionality.
  - **3-organisms** – Combinations of atoms & molecules; sections of your interface.
  - **4-templates** – Consist mostly of groups of organisms stitched together to form pages.
  - **5-pages** – Specific instances of templates.

All directories under **source** are optional.

### Handlebars

#### Data

You can create "data.json"-files beside your components to define some default data. All components "data.json"s will be merged into one big [patternlab data.json](https://patternlab.io/docs/data-overview.html), so it's accessible to any pattern. You can always overwrite the default data by using pattern specific data.

#### Helper

Custom [handlebars helpers](http://handlebarsjs.com/#helpers) are placed in modules/core/source/handlebar-helpers and are registered in patternlab/patternlab-handlebars-config.js.

### Install npm dependencies

Don't install module dependencies manually, let lerna do the job!
E.g. to install "package-xy" in module "news", run `lerna add package-xy modules/news` in the projects root directory (see [lerna docs](https://github.com/lerna/lerna/tree/master/commands/add) for more info)

## Commit changes

This project uses [commitizen](http://commitizen.github.io/cz-cli/). So in order to commit your changes, run `git cz` (or `npx git-cz` if commitizen is not installed globally) instead of `git commit`. commitizen will then ask you a few questions about the change:

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

## Install npm dependencies in the root

Build related packages are installed in the root. In contrast to module dependencies, root dependencies are installed via `npm install` (only modules are managed by lerna).

## Configuration

To exclude a module from compilation, you can disable it in `.rm-frontendrc.js` (by setting its value to `false`).
