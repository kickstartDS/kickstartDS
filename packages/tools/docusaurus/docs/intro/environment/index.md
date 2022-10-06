---
sidebar_position: 3
---

import Admonition from 'react-admonitions'

# Environment

Everything needed for getting started with **kickstartDS** is a Node & npm environment.

Additionally you'll probably want to use an editor like [Visual Studio Code](https://code.visualstudio.com/) to work on your Design System.  
This also enables you to take advantage of smart features, like code completion or inline documentation, while coding.

## Terminal

<Admonition type="tip" title="Working with the terminal">
  Working with a Design System code base in general, and with **kickstartDS** specifically, often involve working with your local terminal.

We can't give you an exhausting intro to that here, but the _MDN_ one is a good start:  
 [Understanding client-side web development tools > Command line crash course](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)
</Admonition>

Generally your best starting point is the built-in terminal, included with most Operating Systems (OS). There's nothing prohibiting you from using other terminal solutions or configurations, but if you happen to come accross something strange feel free to [open a ticket on Github](https://github.com/kickstartDS/kickstartDS/issues/new/choose).

### Included terminal options per OS

- _Windows_: The older [Command Line Shell](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands) or the newer [PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.2).
- _macOS_: The built-in [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) app
- _Linux_: Choice of terminal can vary wildly, depending on distribution (Ubuntu, Debian, Arch, etc) and user preference

## Node & npm

As with most modern frontend tooling, and JavaScript based projects in general, **kickstartDS** is based in Node. You can either download current prebuilt installation packages for all common platforms directly from [their downloads page](https://nodejs.org/en/download/), which include both Node in a specific version, as well as the corresponding version of npm as the package manager, or you use a version manager for Node like `nvm`, to be more flexible in switching used versions of both.

We're currently on Node LTS version `16.14.2`. See [details about it here](https://nodejs.org/en/blog/release/v16.14.2/). We generally adopt new LTS releases (the even numbered ones) when they become stable, and supported by all of our associated downstream tooling (like integrations, themes, etc).

### Verifying installation

To check if your local installation works and matches your expecation, open a new terminal window and run:

```bash
node --version
npm --version
```

Which should result in:

```bash
v16.14.2
8.19.2
```

### Usage with nvm

It's recommended to use a Node version manager. We prefer using `nvm`, a pretty widely used, terminal based solution:  
[https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

We also include a `.nvmrc` file with all our repositories, specifying the currently used and supported version, for example this one for the main repository of **kickstartDS**:  
[https://github.com/kickstartDS/kickstartDS/blob/next/.nvmrc](https://github.com/kickstartDS/kickstartDS/blob/next/.nvmrc)

With `nvm` installed, just switch to the folder and call:

```bash
nvm use
```

Which should net you something like this:

```bash
Found '/home/julrich/Projects/Frontend/code/kickstartDS/.nvmrc' with version <16.14>
Now using node v16.14.2 (npm v8.19.2)
```

If the needed version is not found locally, you're automatically prompted with the correct command to install it. This ensures general compatibility with provided code and it's associated processes.

<Admonition type="tip" title="Automatic Node version change">
  Your currently selected working version of Node and npm can also be chosen completely automated, based on your local shell configuration. This is a bit more environment specific, but enables (for example) version changes based on your current working directory:

Read more on the `nvm` section about [Deeper Shell Integration](https://github.com/nvm-sh/nvm#deeper-shell-integration).
</Admonition>

### Usage with yarn

We use `yarn` for package management ourselves, including their workspaces feature... enabling having all modules / packages together in our single [mono repository](https://github.com/kickstartDS/kickstartDS).

Just replace commands normally prefixed with `npm` by [their corresponding](https://classic.yarnpkg.com/lang/en/docs/migrating-from-npm/) `yarn` equivalents.

<Admonition type="warning" title="Only ever use one package manager">
  You should never mix package manager use. So if you're opting for `yarn`, be careful to not call commands link `npm install`, or `npm run` any longer. Just use their counter parts `yarn install` / `yarn` or `yarn run` instead.

`yarn` uses a `yarn.lock` file to pinpoint your exact versions, whereas `npm` uses `package-lock.json`. This might also give you an indication as to which package manager was used before in a project.
</Admonition>

### Other package managers

Currently the use of `pnpm` or `Nx` is untested. There's nothing immediately coming to mind blocking their use, though. If you happen to use one of them, and come upon problems, feel free to open a ticket on [our Github repository](https://github.com/kickstartDS/kickstartDS/issues/new/choose).

Almost all tooling for modern JavaScript projects is based in Node.js. The download page has prebuilt installation packages for all platforms. We recommend selecting the LTS version to ensure best compatibility.

## Git

You'll probably want to have `Git` support installed on your system, too. This is not strictly a requirement for working with **kickstartDS**, but is the recommended way to work with code today. Learn more about `Git` on [their official website](https://git-scm.com/).

Next to your locally installed `Git` client, most of the time you'll interact with a hosted repository.  
This might live on popular SaaS hosting providers such as Github, Gitlab or Bitbucket, on privately hosted providers, based on those, or a variety of other flavours... up to completely local repositories just used for personal use.

**kickstartDS** is hosted on `Github`, but where your Design System repository is hosted depends on your own setup.  
You can find our repository here: [github.com/kickstartDS/kickstartDS](https://github.com/kickstartDS/kickstartDS)

Popular configuration guides include:

- `GitHub`: [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- `Gitlab`: [Installing Git](https://docs.gitlab.com/ee/topics/git/how_to_install_git/)
- `Bitbucket`: [Install Git](https://www.atlassian.com/git/tutorials/install-git)

### Git GUI

If working with the terminal is not your thing, you might want to use a dedicated Git GUI (Graphical User Interface). For an overview have a [look at the options](https://git-scm.com/downloads/guis/) for your operating system.

[GitHub Desktop](https://desktop.github.com/) is an excellent choice when working with `Github`, but in general the [Visual Studio Code](https://code.visualstudio.com/) Git extensions are an integrated, natural alternative for developers. Learn more about them on their [intro page](https://code.visualstudio.com/docs/sourcecontrol/overview).

### Git TUI

If you just want to have a nicer terminal based experience, you might have a look at the `ncurses`-based `tig`:  
[jonas.github.io/tig](https://jonas.github.io/tig/)
