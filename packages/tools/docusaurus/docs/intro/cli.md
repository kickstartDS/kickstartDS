---
sidebar_position: 4
sidebar_label: CLI Usage
---

# What is kickstartDS CLI?

TODO Describe how the kickstartDS cli eases everyday development tasks, by packaging workflows and dependencies for easy consumption.

TODO add (not needed in GitHub `README.md`) features supported by CLI (Inquirer, rc files, timing, shell completions)
TODO also add technical details like ESM setup, etc

# Install kickstartDS CLI

kickstartDS CLI has to be installed for use with **Node.js**. It can be installed through all the common package managers.

## Install with npm or Yarn

[kickstartDS CLI is available as an npm package](https://www.npmjs.com/package/kickstartds). If you have **Node.js** installed locally, you can install it by running:

```bash
npm install kickstartds@latest -g
```

or if using **Yarn**:

```bash
yarn global add kickstartds
```

If you're encountering problems with this, or for more details on the technical setup needed to work with **kickstartDS**, see our **Getting Started** [over in our documentation](#) TODO add link to section in docs.

## Install as a part of a **kickstartDS** Design System

TODO describe usage as part of a Design System dependency, without global installation. Short description + link to part of main guide in docs.

TODO find a nice-looking image to add here, acting as a visual divider. Ideally links somewhere, too

<img src={require('./assets/screenshot-cli.png').default} alt="Screenshot of the kickstartDS CLI" />

---

# Getting started with kickstartDS CLI

Once you've installed the kickstartDS CLI, you can verify everything works as expected by running the following command:

```bash
kickstartDS --help
```

TODO add image of console output of `--help` here

Fully hosted reference documentation for all options will follow soon, until then everything is discoverable, and documented, through interaction with the CLI.

## Setting up shell completions

TODO describe shell completions

## Design Token commands

TODO describe Design Token commands

## JSON Schema commands

TODO describe JSON Schema commands

### Using kickstartDS in your CI/CD

TODO describe kickstartDS as working easily inside of CI/CD because of its usage in `package.json` based `scripts` entries -> usage as part of a Design System.

## Tips, Tricks and Gotchas

TODO add some, maybe explain some special flags here

# Getting support

TODO describe a way to get support

# Contributing

TODO add contribution guidelines

# Security

TODO Create `SECURITY.md` and link it

# Telemetry

The kickstartDS CLI includes a telemetry feature that collects some usage data. See our [telemetry reference](#) TODO add link for details.

TODO describe opt-out through environment variable

# Used projects:

- https://github.com/SBoudrias/Inquirer.js/
- https://github.com/tj/commander.js/
- https://github.com/shelljs/shelljs/
- https://github.com/winstonjs/winston
- https://github.com/chalk/chalk
- https://github.com/steveukx/git-js
- https://mozilla.github.io/nunjucks/api.html
- https://mozilla.github.io/nunjucks/templating.html
