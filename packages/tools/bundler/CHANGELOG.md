# v4.0.3 (Mon Apr 22 2024)

#### 🐛 Bug Fix

- chore: remove patch for jsonschema-utils ([@julrich](https://github.com/julrich))
- fix(schema): replace examples, instead of merging them ([@julrich](https://github.com/julrich))
- docs: upgrade storybook ([@lmestel](https://github.com/lmestel))
- build(deps): bump fs-extra and @types/fs-extra ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### 📝 Documentation

- Upgrade storybook [#1636](https://github.com/kickstartDS/kickstartDS/pull/1636) ([@lmestel](https://github.com/lmestel) [@julrich](https://github.com/julrich))

#### 🔩 Dependency Updates

- build(deps): bump fs-extra and @types/fs-extra [#1623](https://github.com/kickstartDS/kickstartDS/pull/1623) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 3

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Jonas Ulrich ([@julrich](https://github.com/julrich))
- Lukas Mestel ([@lmestel](https://github.com/lmestel))

---

# v4.0.0 (Mon Mar 04 2024)

#### 💥 Breaking Change

- Restructure section props [#1523](https://github.com/kickstartDS/kickstartDS/pull/1523) ([@lmestel](https://github.com/lmestel))
- Section content alignment [#1486](https://github.com/kickstartDS/kickstartDS/pull/1486) ([@lmestel](https://github.com/lmestel))
- Switch `@kickstartds/bundler` to TypeScript and schema tooling [#1489](https://github.com/kickstartDS/kickstartDS/pull/1489) ([@julrich](https://github.com/julrich))

#### 🚀 Enhancement

- Stop merging allOfs in component TypeScript type generation [#1518](https://github.com/kickstartDS/kickstartDS/pull/1518) ([@julrich](https://github.com/julrich))
- Have overwritable types for components [#1457](https://github.com/kickstartDS/kickstartDS/pull/1457) ([@lmestel](https://github.com/lmestel) [@julrich](https://github.com/julrich))
- Add debounce & throttle utility functions [#1444](https://github.com/kickstartDS/kickstartDS/pull/1444) ([@lmestel](https://github.com/lmestel))

#### 🐛 Bug Fix

- Update peer dependencies [#1621](https://github.com/kickstartDS/kickstartDS/pull/1621) ([@lmestel](https://github.com/lmestel))
- build: update peer dependencies ([@lmestel](https://github.com/lmestel))
- chore: new release \[skip ci\] ([@lmestel](https://github.com/lmestel))
- Update CHANGELOG.md \[skip ci\] ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into beta ([@lmestel](https://github.com/lmestel))
- Merge branch 'master' into next ([@lmestel](https://github.com/lmestel))
- build(deps-dev): bump storybook from 7.4.6 to 7.6.17 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Merge branch 'master' into beta ([@lmestel](https://github.com/lmestel))
- build(deps): bump replace-in-file from 7.0.1 to 7.1.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup-plugin-node-externals from 5.1.3 to 6.1.2 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Remove glide from bundle [#1528](https://github.com/kickstartDS/kickstartDS/pull/1528) ([@lmestel](https://github.com/lmestel))
- build: make scss bundler script cjs compatible ([@lmestel](https://github.com/lmestel))
- build: remove glide from bundle ([@lmestel](https://github.com/lmestel))
- feat(merge): upstream changes from next branch ([@julrich](https://github.com/julrich))
- build: replace deprecated sass import ([@lmestel](https://github.com/lmestel))
- build(deps): bump @rollup/plugin-replace from 5.0.3 to 5.0.5 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- fix(bundler): add additional import replacements ([@julrich](https://github.com/julrich))
- fix(bundler): also replace import paths in typing.d.ts files ([@julrich](https://github.com/julrich))
- feat(types): stop merging allOfs in component TypeScript type generation ([@julrich](https://github.com/julrich))
- chore(merge): upstream next changes to resolve conflicts ([@julrich](https://github.com/julrich))
- fix(bundler): schemaPath resolution for deref ([@julrich](https://github.com/julrich))
- chore(bundler): add content type mapping to bundler ([@julrich](https://github.com/julrich))
- fix(bundler): stricter match for path resolving ([@julrich](https://github.com/julrich))
- fix(storybook): re-activate all addons, update dependencies ([@julrich](https://github.com/julrich))
- fix(ci): broken build after picuture / lazy image move ([@julrich](https://github.com/julrich))
- fix(storybook): get storybook start running again, move picture / lazy-image ([@julrich](https://github.com/julrich))
- fix(bundler): first working build after TypeScript switch ([@julrich](https://github.com/julrich))
- build(deps): bump postcss from 8.4.29 to 8.4.31 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- fix(bundler): add shebang for node to bundle entrypoint ([@julrich](https://github.com/julrich))
- fix(bundler): change entrypoint for bundler independent of TypeScript ([@julrich](https://github.com/julrich))
- fix(bundler): more improvements, squash some bugs ([@julrich](https://github.com/julrich))
- fix(bundler): yarn build runs through, again ([@julrich](https://github.com/julrich))
- fix(bundler): fix dereferencing ([@julrich](https://github.com/julrich))
- feat(bundler): move to TypeScript ([@julrich](https://github.com/julrich))
- Fix json schema types in generated stories [#1479](https://github.com/kickstartDS/kickstartDS/pull/1479) ([@lmestel](https://github.com/lmestel))
- build: fix json schema types in generated stories ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into build/replace-htmltojsx-dependency ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into dependabot/npm_and_yarn/stylelint-15.10.3 ([@lmestel](https://github.com/lmestel))
- fix(bundler): content module detection ([@julrich](https://github.com/julrich))
- fix(bundler): fine-tune import path post-processing ([@julrich](https://github.com/julrich))
- feat(bundler): more sophisticated type replacements ([@julrich](https://github.com/julrich))
- fix(bundler): update regex matching for content module ([@julrich](https://github.com/julrich))
- Merge branch 'feature/1407-improve-storybook-controls' into feature/split-typing-in-typescript-declarations ([@julrich](https://github.com/julrich))
- chore(merge): upstream changes from next ([@julrich](https://github.com/julrich))
- fix(bundler): post-process some demo types to test ([@julrich](https://github.com/julrich))
- feat(bundle): have overwritable types for components ([@julrich](https://github.com/julrich))
- Merge branch 'next' into feature/1407-improve-storybook-controls ([@lmestel](https://github.com/lmestel))
- feat: add debounce & throttle utility functions ([@lmestel](https://github.com/lmestel))
- build: reactivate storybook component-tokens addon ([@lmestel](https://github.com/lmestel))

#### 🔩 Dependency Updates

- build(deps-dev): bump storybook from 7.4.6 to 7.6.17 [#1611](https://github.com/kickstartDS/kickstartDS/pull/1611) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @types/react from 18.2.25 to 18.2.61 [#1618](https://github.com/kickstartDS/kickstartDS/pull/1618) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 4.4.12 to 4.5.2 [#1587](https://github.com/kickstartDS/kickstartDS/pull/1587) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump replace-in-file from 7.0.1 to 7.1.0 [#1571](https://github.com/kickstartDS/kickstartDS/pull/1571) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump shiki from 0.14.4 to 0.14.5 [#1509](https://github.com/kickstartDS/kickstartDS/pull/1509) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup-plugin-node-externals from 5.1.3 to 6.1.2 [#1506](https://github.com/kickstartDS/kickstartDS/pull/1506) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @rollup/plugin-replace from 5.0.3 to 5.0.5 [#1519](https://github.com/kickstartDS/kickstartDS/pull/1519) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump postcss from 8.4.29 to 8.4.31 [#1490](https://github.com/kickstartDS/kickstartDS/pull/1490) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 4

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Franz ([@fleven-kds](https://github.com/fleven-kds))
- Jonas Ulrich ([@julrich](https://github.com/julrich))
- Lukas Mestel ([@lmestel](https://github.com/lmestel))

---

# v3.0.0 (Mon Mar 04 2024)

#### 💥 Breaking Change

- Restructure section props [#1523](https://github.com/kickstartDS/kickstartDS/pull/1523) ([@lmestel](https://github.com/lmestel))
- Section content alignment [#1486](https://github.com/kickstartDS/kickstartDS/pull/1486) ([@lmestel](https://github.com/lmestel))
- Switch `@kickstartds/bundler` to TypeScript and schema tooling [#1489](https://github.com/kickstartDS/kickstartDS/pull/1489) ([@julrich](https://github.com/julrich))

#### 🚀 Enhancement

- Stop merging allOfs in component TypeScript type generation [#1518](https://github.com/kickstartDS/kickstartDS/pull/1518) ([@julrich](https://github.com/julrich))
- Have overwritable types for components [#1457](https://github.com/kickstartDS/kickstartDS/pull/1457) ([@lmestel](https://github.com/lmestel) [@julrich](https://github.com/julrich))
- Add debounce & throttle utility functions [#1444](https://github.com/kickstartDS/kickstartDS/pull/1444) ([@lmestel](https://github.com/lmestel))

#### 🐛 Bug Fix

- Merge branch 'next' into beta ([@lmestel](https://github.com/lmestel))
- Merge branch 'master' into next ([@lmestel](https://github.com/lmestel))
- build(deps-dev): bump storybook from 7.4.6 to 7.6.17 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Merge branch 'master' into beta ([@lmestel](https://github.com/lmestel))
- build(deps): bump replace-in-file from 7.0.1 to 7.1.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup-plugin-node-externals from 5.1.3 to 6.1.2 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Remove glide from bundle [#1528](https://github.com/kickstartDS/kickstartDS/pull/1528) ([@lmestel](https://github.com/lmestel))
- build: make scss bundler script cjs compatible ([@lmestel](https://github.com/lmestel))
- build: remove glide from bundle ([@lmestel](https://github.com/lmestel))
- feat(merge): upstream changes from next branch ([@julrich](https://github.com/julrich))
- build: replace deprecated sass import ([@lmestel](https://github.com/lmestel))
- build(deps): bump @rollup/plugin-replace from 5.0.3 to 5.0.5 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- fix(bundler): add additional import replacements ([@julrich](https://github.com/julrich))
- fix(bundler): also replace import paths in typing.d.ts files ([@julrich](https://github.com/julrich))
- feat(types): stop merging allOfs in component TypeScript type generation ([@julrich](https://github.com/julrich))
- chore(merge): upstream next changes to resolve conflicts ([@julrich](https://github.com/julrich))
- fix(bundler): schemaPath resolution for deref ([@julrich](https://github.com/julrich))
- chore(bundler): add content type mapping to bundler ([@julrich](https://github.com/julrich))
- fix(bundler): stricter match for path resolving ([@julrich](https://github.com/julrich))
- fix(storybook): re-activate all addons, update dependencies ([@julrich](https://github.com/julrich))
- fix(ci): broken build after picuture / lazy image move ([@julrich](https://github.com/julrich))
- fix(storybook): get storybook start running again, move picture / lazy-image ([@julrich](https://github.com/julrich))
- fix(bundler): first working build after TypeScript switch ([@julrich](https://github.com/julrich))
- build(deps): bump postcss from 8.4.29 to 8.4.31 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- fix(bundler): add shebang for node to bundle entrypoint ([@julrich](https://github.com/julrich))
- fix(bundler): change entrypoint for bundler independent of TypeScript ([@julrich](https://github.com/julrich))
- fix(bundler): more improvements, squash some bugs ([@julrich](https://github.com/julrich))
- fix(bundler): yarn build runs through, again ([@julrich](https://github.com/julrich))
- fix(bundler): fix dereferencing ([@julrich](https://github.com/julrich))
- feat(bundler): move to TypeScript ([@julrich](https://github.com/julrich))
- Fix json schema types in generated stories [#1479](https://github.com/kickstartDS/kickstartDS/pull/1479) ([@lmestel](https://github.com/lmestel))
- build: fix json schema types in generated stories ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into build/replace-htmltojsx-dependency ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into dependabot/npm_and_yarn/stylelint-15.10.3 ([@lmestel](https://github.com/lmestel))
- fix(bundler): content module detection ([@julrich](https://github.com/julrich))
- fix(bundler): fine-tune import path post-processing ([@julrich](https://github.com/julrich))
- feat(bundler): more sophisticated type replacements ([@julrich](https://github.com/julrich))
- fix(bundler): update regex matching for content module ([@julrich](https://github.com/julrich))
- Merge branch 'feature/1407-improve-storybook-controls' into feature/split-typing-in-typescript-declarations ([@julrich](https://github.com/julrich))
- chore(merge): upstream changes from next ([@julrich](https://github.com/julrich))
- fix(bundler): post-process some demo types to test ([@julrich](https://github.com/julrich))
- feat(bundle): have overwritable types for components ([@julrich](https://github.com/julrich))
- Merge branch 'next' into feature/1407-improve-storybook-controls ([@lmestel](https://github.com/lmestel))
- feat: add debounce & throttle utility functions ([@lmestel](https://github.com/lmestel))
- build: reactivate storybook component-tokens addon ([@lmestel](https://github.com/lmestel))

#### 🔩 Dependency Updates

- build(deps-dev): bump storybook from 7.4.6 to 7.6.17 [#1611](https://github.com/kickstartDS/kickstartDS/pull/1611) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @types/react from 18.2.25 to 18.2.61 [#1618](https://github.com/kickstartDS/kickstartDS/pull/1618) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 4.4.12 to 4.5.2 [#1587](https://github.com/kickstartDS/kickstartDS/pull/1587) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump replace-in-file from 7.0.1 to 7.1.0 [#1571](https://github.com/kickstartDS/kickstartDS/pull/1571) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump shiki from 0.14.4 to 0.14.5 [#1509](https://github.com/kickstartDS/kickstartDS/pull/1509) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup-plugin-node-externals from 5.1.3 to 6.1.2 [#1506](https://github.com/kickstartDS/kickstartDS/pull/1506) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @rollup/plugin-replace from 5.0.3 to 5.0.5 [#1519](https://github.com/kickstartDS/kickstartDS/pull/1519) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump postcss from 8.4.29 to 8.4.31 [#1490](https://github.com/kickstartDS/kickstartDS/pull/1490) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 4

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Franz ([@fleven-kds](https://github.com/fleven-kds))
- Jonas Ulrich ([@julrich](https://github.com/julrich))
- Lukas Mestel ([@lmestel](https://github.com/lmestel))

---

# v2.2.0 (Fri Jun 30 2023)

#### 🚀 Enhancement

- Upgrade to Storybook 7 [#1292](https://github.com/kickstartDS/kickstartDS/pull/1292) ([@julrich](https://github.com/julrich))

#### 🐛 Bug Fix

- Trigger more releases [#1372](https://github.com/kickstartDS/kickstartDS/pull/1372) ([@julrich](https://github.com/julrich))
- chore(release): trigger more releases ([@julrich](https://github.com/julrich))
- Trigger another release [#1370](https://github.com/kickstartDS/kickstartDS/pull/1370) ([@julrich](https://github.com/julrich))
- chore(release): update bundler, too ([@julrich](https://github.com/julrich))
- chore: merge current next into feature branch ([@julrich](https://github.com/julrich))
- fix(core): move rich text styles to global scope ([@julrich](https://github.com/julrich))
- fix(chromatic): add delay to story snapshotting ([@julrich](https://github.com/julrich))
- fix(dependencies): update dependencies ([@julrich](https://github.com/julrich))
- chore(merge): merge next into this branch ([@julrich](https://github.com/julrich))
- fix(storybook): deactivate darkmode addon for now ([@julrich](https://github.com/julrich))
- Move internal dependencies to peerDependencies [#1315](https://github.com/kickstartDS/kickstartDS/pull/1315) ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into feature/internal-dependencies ([@lmestel](https://github.com/lmestel))
- build(deps-dev): bump storybook-design-token from 1.4.0 to 2.9.0 ([@lmestel](https://github.com/lmestel))
- build: move internal dependencies to peerDependencies ([@lmestel](https://github.com/lmestel))
- refactor: rewrite storybook helper in ts ([@lmestel](https://github.com/lmestel))
- fix(storybook): move configuration to TypeScript ([@julrich](https://github.com/julrich))
- fix(storybook): markdown stories after upgrade to 7 ([@julrich](https://github.com/julrich))
- fix(storybook): add correct glob, including .ts ([@julrich](https://github.com/julrich))
- chore(dependencies): update peerDependencies (React, kickstartDS) ([@julrich](https://github.com/julrich))
- feat(storybook): first draft of Storybook 7 upgrade ([@julrich](https://github.com/julrich))
- build(deps): bump rollup-plugin-ts from 3.0.2 to 3.2.0 ([@lmestel](https://github.com/lmestel))
- build(deps): bump typescript from 4.8.4 to 4.9.5 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump postcss from 8.4.17 to 8.4.21 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Merge branch 'next' into dependabot/npm_and_yarn/babel/core-7.21.4 ([@lmestel](https://github.com/lmestel))
- build(deps): bump @babel/plugin-transform-runtime from 7.19.1 to 7.21.4 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @rollup/plugin-babel from 5.3.1 to 6.0.3 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/core from 7.19.6 to 7.21.4 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @rollup/plugin-node-resolve from 15.0.0 to 15.0.2 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- fix babel targets [#1277](https://github.com/kickstartDS/kickstartDS/pull/1277) ([@lmestel](https://github.com/lmestel))
- build: add browserslist config to ts bundle ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into build/babel-target ([@lmestel](https://github.com/lmestel))
- build: fix babel targets ([@lmestel](https://github.com/lmestel))
- Merge branch 'master' into docs/adjust-banner-style ([@julrich](https://github.com/julrich))
- Merge branch 'master' into docs/update-storybook-design-token-addon ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into docs/update-storybook-design-token-addon ([@lmestel](https://github.com/lmestel))

#### 🏠 Internal

- Rewrite Storybook helpers in Typescript [#1300](https://github.com/kickstartDS/kickstartDS/pull/1300) ([@lmestel](https://github.com/lmestel) [@julrich](https://github.com/julrich))

#### 🔩 Dependency Updates

- build(deps-dev): bump storybook-design-token from 1.4.0 to 2.9.0 [#1251](https://github.com/kickstartDS/kickstartDS/pull/1251) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps): bump typescript from 4.8.4 to 4.9.5 [#1246](https://github.com/kickstartDS/kickstartDS/pull/1246) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps): bump postcss from 8.4.17 to 8.4.21 [#1242](https://github.com/kickstartDS/kickstartDS/pull/1242) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/core from 7.19.6 to 7.21.4 [#1289](https://github.com/kickstartDS/kickstartDS/pull/1289) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps): bump @rollup/plugin-babel from 5.3.1 to 6.0.3 [#1210](https://github.com/kickstartDS/kickstartDS/pull/1210) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @rollup/plugin-node-resolve from 15.0.0 to 15.0.2 [#1288](https://github.com/kickstartDS/kickstartDS/pull/1288) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 3

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Jonas Ulrich ([@julrich](https://github.com/julrich))
- Lukas Mestel ([@lmestel](https://github.com/lmestel))

---

# v2.0.3 (Mon Nov 21 2022)

#### 🐛 Bug Fix

- build: increase browser support & fix babel config ([@lmestel](https://github.com/lmestel))

#### 🏠 Internal

- increase browser support & fix babel config [#1205](https://github.com/kickstartDS/kickstartDS/pull/1205) ([@lmestel](https://github.com/lmestel))

#### Authors: 2

- Daniel ([@DanielLeyUX](https://github.com/DanielLeyUX))
- Lukas Mestel ([@lmestel](https://github.com/lmestel))

---

# v2.0.2 (Tue Nov 15 2022)

#### ⚠️ Pushed to `master`

- chore(changelog): finalize CHANGELOGs ([@julrich](https://github.com/julrich))

#### Authors: 1

- Jonas Ulrich ([@julrich](https://github.com/julrich))

---

# v2.0.1 (Tue Nov 15 2022)

#### ⚠️ Pushed to `master`

- chore(changelog): add CHANGELOG notes ([@julrich](https://github.com/julrich))

#### Authors: 1

- Jonas Ulrich ([@julrich](https://github.com/julrich))

---

# v2.0.0 (Tue Nov 15 2022)

## **kickstartDS** 2.0.0 - Release of **kickstartDS** as **Open Source**

Release of **kickstartDS** as **Open Source**, read more on our blog:
https://www.kickstartds.com/blog/kickstartds-is-open-source-now-lets-start-to-democratize-design-systems-today/

Also includes some major new and reworked features:
* Introduction of **Style Dictionary**, semantic Design Token (with Figma support) and Component Token
* Switch to CSS Container Queries for all component layouting
* Addition of documentation at https://www.kickstartDS.com/docs

Read the extended `CHANGELOG.md` there, for all the changes included in this release.
See the migrations page to upgrade: https://www.kickstartds.com/docs/guides/migrations/

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Franz [@fleven-kds](https://github.com/fleven-kds)

:heart: Daniel ([@DanielLeyUX](https://github.com/DanielLeyUX))

#### 💥 Breaking Change

- Major Open Source release [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel) [@fleven-kds](https://github.com/fleven-kds) [@julrich](https://github.com/julrich) [@dependabot[bot]](https://github.com/dependabot[bot]) [@DanielLeyUX](https://github.com/DanielLeyUX))

#### 🐛 Bug Fix

- Merge branch 'next' into feature/docs ([@lmestel](https://github.com/lmestel))
- Merge branch 'feature/docs' of github.com:kickstartDS/kickstartDS into feature/docs ([@julrich](https://github.com/julrich))
- docs: add LICENSES and update README.mds ([@julrich](https://github.com/julrich))
- build: unify sass version ([@lmestel](https://github.com/lmestel))
- build: fix story creation ([@lmestel](https://github.com/lmestel))
- Merge branch 'feature/docs' of https://github.com/kickstartDS/kickstartDS into feature/docs ([@fleven-kds](https://github.com/fleven-kds))
- build: fix ts bundle ([@lmestel](https://github.com/lmestel))
- build: move storybook scripts to bundler package ([@lmestel](https://github.com/lmestel))
- Merge branch 'feature/docs' of github.com:kickstartDS/kickstartDS into feature/docs ([@lmestel](https://github.com/lmestel))
- feat: lazy load all component scripts ([@lmestel](https://github.com/lmestel))
- Merge branch 'feature/style-dictionary-container-queries' into feature/docs ([@lmestel](https://github.com/lmestel))
- refactor: move example data in schemas from `default` prop to `examples` ([@lmestel](https://github.com/lmestel))
- build: remove package's single entrypoint ([@lmestel](https://github.com/lmestel))
- build: fix tsx imports in js files ([@lmestel](https://github.com/lmestel))
- build: add glidejs to bundle ([@lmestel](https://github.com/lmestel))
- build: find project root in non-lerna-repo ([@lmestel](https://github.com/lmestel))
- build: publish @kickstartds/bundler package ([@lmestel](https://github.com/lmestel))

#### Authors: 5

- [@dependabot[bot]](https://github.com/dependabot[bot])
- [@fleven-kds](https://github.com/fleven-kds)
- Daniel ([@DanielLeyUX](https://github.com/DanielLeyUX))
- Jonas Ulrich ([@julrich](https://github.com/julrich))
- Lukas Mestel ([@lmestel](https://github.com/lmestel))
