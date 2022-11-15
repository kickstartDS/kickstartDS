---
sidebar_position: 2
---

import { Section } from "@kickstartds/base/lib/section";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";

# Upgrading

We generally try to avoid Breaking Changes, and thus the need for explicit migration. We've tried very hard to find abstractions for the core of **kickstartDS** that enable exactly those easy, forward-compatible changes.

But as with all software that's meant to last, some more heavy changes will eventually be needed, for example to accomodate changing needs or standards. In that case we will have a dedicated migration guide ready for that Breaking Change in version. Additionall we'll support upgrades / migrations through our **kickstartDS** CLI, as much as possible!

## Current migration guides

<Section ks-theme="docs" spaceBefore="none" spaceAfter="none" width="full">
  <TeaserBox
    link={{
      size: 'small',
      href: '/docs/guides/migrations/upgrade-2.0.0',
      label: "Follow Guide",
      variant: "outline",
    }}
    text="Upgrade to our first Open Source-available release"
    topic="Migration to 2.x"
  />
</Section>

## Some background information

To give some general context to versioning and releases with **kickstartDS**, you might read through the following paragraphs to gain a deeper understanding. Those cover some specifics (like changelog generation), but with a focus on the details pertaining to migration of code, and navigation of complementary information.

### Semantic versioning with Auto

Versioning is done semantically, closely following [SemVer](https://semver.org/lang/de/). So Breaking Changes will be expressed in the initial number of the version (we're currently on `2.x`)
To further improve ease of use, and add consistency through good defaults, we use Auto to generate releases based on semantic version labels on pull requests on our Github repository.

Learn more about this in our Contribution-Guide, detailling this process of Github Discussions, Issues, Pull Requests, Canaries and releases.

### Automatic Changelog generation

Changelogs are generated on a per module basis (current modules include: `core`, `base`, `blog`, `form`, `content`). Each module has its own `CHANGELOG.md` in its package root.

For example, see the `CHANGELOG.md` for the `core` module on our Github repository:  
[https://github.com/kickstartDS/kickstartDS/blob/master/packages/components/core/CHANGELOG.md](https://github.com/kickstartDS/kickstartDS/blob/master/packages/components/core/CHANGELOG.md)

Formatting of commits follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), enabling structured grouping by change type in generated `CHANGELOG.md` files, and consistent entry of commit info through CLI hooks and linting integration:  
https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional

### Github and npm releases

Additionally you can explore all releases through either our [Github releases page](https://github.com/kickstartDS/kickstartDS/releases), or by viewing all [packages and release channels on npm](https://www.npmjs.com/org/kickstartds). This can give you a quick overview over current stable releases, upcoming feature-related releases, or even cutting edge work on future versions to test out early.

Lastly you'll find Canary releases, used to enable early testing of bugfix changes or new features, in an isolated fashion. Canary releases get generated for every branch of our Github repository automatically. They get applied the same build processes like the stable `master` branch, or the `next` branch with upcoming features, enabling visual regression testing and the aforementioned automatic releases for local reproducability.

As work on bugs and features always occurs on branches, this enables continous quality control from the start.

To learn about our packages in more detail, have a look at [the Packages page](./packages.md).
