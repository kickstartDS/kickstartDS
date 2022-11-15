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
- fix: update container queries syntax & polyfill to latest spec [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- Merge branch 'feature/style-dictionary-container-queries' into feature/docs [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- refactor: convert interators with `Array.from` in container polyfill [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat(docs): add basic docusaurus docs [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@julrich](https://github.com/julrich))
- merge `link-button` into `button` component [#930](https://github.com/kickstartDS/kickstartDS/pull/930) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build: add missing deps in style-dictionary [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- build: move pubsub dep back to core package [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- build: move style-dictionary config in its own module [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- fix: add cms to packaged files in core [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@julrich](https://github.com/julrich))
- chore(schema): add page.schema.json, add $id to token schemas [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@julrich](https://github.com/julrich))
- feat: add `ks-theme` layer to enable partial token overwrites [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- fix: add `link` and `link-inverted` to scales, refit `transparent` [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@julrich](https://github.com/julrich))
- fix: fix text-color schema [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@julrich](https://github.com/julrich))
- feat: add missing interactive styles to text-color [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@julrich](https://github.com/julrich))
- test: add json schemas for token files [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: add `link-inverted`, `clear`- & `primaray`- base tokens [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- build: fix babel preset resolution in style dictionary format [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- refactor: use scales for all semantic color tokens [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- docs: remove base prefix from design tokens in storybook [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: add foreground color scale; improve inverted logic [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- fix: fix button colors [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: add background-color accent-inverted token, add inverted prop to section [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- docs: add border-radius & box-shadow token stories [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- refactor: set inverted colors as token variants [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: add primary inverted color alpha scales [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- fix: add missing unit to spacing tokens [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- refactor: move spacing concept tokens to style dictionary [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: add depth tokens [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: add border-radius & box-shadow blur to token primitives [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: add primary color alpha scale tokens [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: add spacing concept tokens [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- build: create one token json file per category [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: add border, box-shadow & transition tokens [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- refactor: unify container component exports [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- refactor: move react helpers to utils [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- fix: transpile icon-sprite jsx [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- build: add option to use custom icons [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- fix: fix `--ks-background-color-primary-inverted-interactive` [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- fix: fix deprecated grey scale & form field styles [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- fix: fix default spacing scale [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- Merge branch 'feature/style-dictionary' into feature/style-dictionary-container-queries [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: add scss container mixins [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: use container-queries in rich-text, move generic headline styles to rich-text [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: use container-queries in slider, logo-tiles & quote [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: use container-queries in table, headline, text-media & collapsible-box [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into feature/container-queries [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: add `breakpoints` token [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: add container component [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- refactor: remove breakpoint mixin where possible [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: rename breakpoints in token primitives [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: optimize token css file [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: bring back deprecated tokens [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- fix: write tokens in json format [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- fix: bring back font-weight tokens [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- build: refactor token generation [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- fix: bring back font-family tokens [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- fix: fix typo in design token names [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- build: add design token primitives to package [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: use modular scale to calculate font-size scales [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: add design token primitives schema [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- build: simplify style dictionary config [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: read breakpoints from tokens [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- refactor: unify token templates [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- build: fix style dictionary helper [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: calculate spacing scales [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- build: add watch task for design tokens [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- refactor: create responsive tokens in style dictionary [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- refactor: remove unused scss color helper [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- refactor: move token primitives in single json file [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- Merge branch 'beta' into feature/style-dictionary [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: add background- & text-color tokens [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into beta [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into feature/style-dictionary [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- build: fix storybook token mapping [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- feat: remove `calc` from tokens [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- build: fix build path for token generation [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))
- build: generate design tokens with style dictionary [#1092](https://github.com/kickstartDS/kickstartDS/pull/1092) ([@lmestel](https://github.com/lmestel))

#### 🚀 Enhancement

- build(deps): bump photoswipe from 4.1.3 to 5.3.2 [#1117](https://github.com/kickstartDS/kickstartDS/pull/1117) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- Merge branch 'feature/inverted-tokens' into feature/style-dictionary-container-queries [#976](https://github.com/kickstartDS/kickstartDS/pull/976) ([@lmestel](https://github.com/lmestel))
- feat: generate inverted color tokens [#976](https://github.com/kickstartDS/kickstartDS/pull/976) ([@lmestel](https://github.com/lmestel))
- blog refactoring [#875](https://github.com/kickstartDS/kickstartDS/pull/875) ([@lmestel](https://github.com/lmestel))
- add container queries polyfill [#571](https://github.com/kickstartDS/kickstartDS/pull/571) ([@lmestel](https://github.com/lmestel))
- every component forwards its `ref` [#645](https://github.com/kickstartDS/kickstartDS/pull/645) ([@lmestel](https://github.com/lmestel))
- add `createProvider` helper [#605](https://github.com/kickstartDS/kickstartDS/pull/605) ([@lmestel](https://github.com/lmestel))

#### 🐛 Bug Fix

- Merge branch 'next' into feature/docs ([@lmestel](https://github.com/lmestel))
- Merge branch 'feature/docs' of github.com:kickstartDS/kickstartDS into feature/docs ([@julrich](https://github.com/julrich))
- docs: add LICENSES and update README.mds ([@julrich](https://github.com/julrich))
- build: unify sass version ([@lmestel](https://github.com/lmestel))
- Merge branch 'feature/docs' of https://github.com/kickstartDS/kickstartDS into feature/docs ([@fleven-kds](https://github.com/fleven-kds))
- build: move storybook scripts to bundler package ([@lmestel](https://github.com/lmestel))
- Merge branch 'feature/docs' of github.com:kickstartDS/kickstartDS into feature/docs ([@lmestel](https://github.com/lmestel))
- feat: clean up event listeners etc on component unmount ([@lmestel](https://github.com/lmestel))
- build(deps): bump @babel/runtime from 7.19.0 to 7.19.4 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- feat: lazy load all component scripts ([@lmestel](https://github.com/lmestel))
- feat: rename global object from `rm` to `_ks` ([@lmestel](https://github.com/lmestel))
- feat: rename `data-component` to `ks-component` & add `component` prop to every component ([@lmestel](https://github.com/lmestel))
- Merge branch 'feature/style-dictionary-container-queries' into feature/docs ([@lmestel](https://github.com/lmestel))
- fix: extract correct args from array schema ([@lmestel](https://github.com/lmestel))
- refactor: move example data in schemas from `default` prop to `examples` ([@lmestel](https://github.com/lmestel))
- build: remove package's single entrypoint ([@lmestel](https://github.com/lmestel))
- refactor: fix type hints ([@lmestel](https://github.com/lmestel))
- build: publish storybook-design-token pages ([@lmestel](https://github.com/lmestel))
- build: publish @kickstartds/bundler package ([@lmestel](https://github.com/lmestel))
- build: create storybook related tokens in storybook package ([@lmestel](https://github.com/lmestel))
- Merge branch 'feature/style-dictionary-container-queries' into feature/docs ([@julrich](https://github.com/julrich))
- build(deps): bump esbuild from 0.14.42 to 0.15.10 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- refactor: rename type `ui` variant to `interface` ([@lmestel](https://github.com/lmestel))
- build(deps): bump sass from 1.52.1 to 1.55.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- chore: move collapsible box & contact components to base ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into feature/style-dictionary-container-queries ([@lmestel](https://github.com/lmestel))
- Merge branch 'feature/style-dictionary-container-queries' into dependabot/npm_and_yarn/photoswipe-5.3.2 ([@lmestel](https://github.com/lmestel))
- build(deps): bump @babel/runtime from 7.17.9 to 7.19.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- fix: update container queries syntax in custom properties mixin ([@lmestel](https://github.com/lmestel))
- test: fix `renderFn` types ([@lmestel](https://github.com/lmestel))
- Merge branch 'feature/style-dictionary-container-queries' into feature/one-button-to-rule-them-all ([@lmestel](https://github.com/lmestel))
- build(deps): bump sass from 1.51.0 to 1.52.1 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.38 to 0.14.42 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.50.1 to 1.51.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.36 to 0.14.38 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- chore: schema inconsistencies and upgrade [#999](https://github.com/kickstartDS/kickstartDS/pull/999) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@julrich](https://github.com/julrich) [@lmestel](https://github.com/lmestel))
- build(deps): bump sass from 1.50.0 to 1.50.1 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/runtime from 7.17.8 to 7.17.9 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump fs-extra from 10.0.1 to 10.1.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- chore(merge): merge next into branch ([@julrich](https://github.com/julrich))
- fix container query mixin wrapper [#995](https://github.com/kickstartDS/kickstartDS/pull/995) ([@julrich](https://github.com/julrich))
- fix(container): make wrapper in container usable with explicit name, too ([@julrich](https://github.com/julrich))
- fix(container): improve container mixin [#994](https://github.com/kickstartDS/kickstartDS/pull/994) ([@julrich](https://github.com/julrich))
- fix(container): improve container mixing, by making container name explicit ([@julrich](https://github.com/julrich))
- Merge branch 'next' into fix/simplify-section-schema-and-open-up-enums ([@julrich](https://github.com/julrich))
- build(deps): bump esbuild from 0.14.35 to 0.14.36 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.32 to 0.14.35 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.49.11 to 1.50.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- unify component props exports [#961](https://github.com/kickstartDS/kickstartDS/pull/961) ([@lmestel](https://github.com/lmestel))
- build(deps): bump esbuild from 0.14.31 to 0.14.32 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Merge branch 'next' into dependabot/npm_and_yarn/storybook/core-6.4.20 ([@lmestel](https://github.com/lmestel))
- build(deps): bump esbuild from 0.14.29 to 0.14.31 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.49.10 to 1.49.11 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- fix typescript definitions [#949](https://github.com/kickstartDS/kickstartDS/pull/949) ([@lmestel](https://github.com/lmestel))
- fix: fix wrong paths in typescript definitions ([@lmestel](https://github.com/lmestel))
- build(deps): bump sass from 1.49.9 to 1.49.10 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.28 to 0.14.29 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.27 to 0.14.28 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/runtime from 7.17.2 to 7.17.8 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.25 to 0.14.27 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.23 to 0.14.25 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.49.8 to 1.49.9 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Merge branch 'docs/post-aside-defaults' into feature/blog-refactoring ([@lmestel](https://github.com/lmestel))
- build(deps): bump fs-extra from 10.0.0 to 10.0.1 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump bourbon from 7.0.0 to 7.2.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- add vcs information in packages [#867](https://github.com/kickstartDS/kickstartDS/pull/867) ([@lmestel](https://github.com/lmestel))
- chore: add url to the project's issue tracker in packages ([@lmestel](https://github.com/lmestel))
- chore: add vcs information to packages ([@lmestel](https://github.com/lmestel))
- chore: unify package.json structure ([@lmestel](https://github.com/lmestel))
- Merge branch 'beta' into feature/schema-naming ([@lmestel](https://github.com/lmestel))
- Merge branch 'beta' into build/component-style-loading ([@lmestel](https://github.com/lmestel))
- build(deps): bump esbuild from 0.14.22 to 0.14.23 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.49.7 to 1.49.8 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.21 to 0.14.22 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build: transpile jsx imports in js at buildtime ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into build/component-style-loading ([@lmestel](https://github.com/lmestel))
- remove unnecessary polyfills [#829](https://github.com/kickstartDS/kickstartDS/pull/829) ([@lmestel](https://github.com/lmestel))
- refactor: remove critical style comments ([@lmestel](https://github.com/lmestel))
- build(deps): bump @babel/runtime from 7.16.7 to 7.17.2 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.20 to 0.14.21 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- refactor: remove unused code ([@lmestel](https://github.com/lmestel))
- build(deps): bump esbuild from 0.14.18 to 0.14.20 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Merge branch 'next' into dependabot/npm_and_yarn/auto-10.32.6 ([@lmestel](https://github.com/lmestel))
- build(deps): bump sass from 1.49.0 to 1.49.7 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.11 to 0.14.18 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- prevent container queries polyfill from failing [#796](https://github.com/kickstartDS/kickstartDS/pull/796) ([@lmestel](https://github.com/lmestel))
- fix: prevent container queries polyfill from failing ([@lmestel](https://github.com/lmestel))
- build(deps): bump sass from 1.48.0 to 1.49.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump fast-glob from 3.2.10 to 3.2.11 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.47.0 to 1.48.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.46.0 to 1.47.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.10 to 0.14.11 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/runtime from 7.16.5 to 7.16.7 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump fast-glob from 3.2.7 to 3.2.10 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.45.0 to 1.46.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.3 to 0.14.10 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Merge branch 'next' into dependabot/npm_and_yarn/babel/core-7.16.5 ([@lmestel](https://github.com/lmestel))
- build(deps): bump @babel/runtime from 7.16.3 to 7.16.5 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build: update sass tooling to new sass api ([@lmestel](https://github.com/lmestel))
- build(deps): bump sass from 1.43.5 to 1.45.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Merge branch 'next' into feature/container-queries ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into dependabot/npm_and_yarn/storybook/cli-6.4.9 ([@lmestel](https://github.com/lmestel))
- build(deps): bump esbuild from 0.13.15 to 0.14.3 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- style: satisfy stylelint ([@lmestel](https://github.com/lmestel))
- refactor: replace `css-element-queries` ponyfill with container queries polyfill ([@lmestel](https://github.com/lmestel))
- fix: fix container query css regex ([@lmestel](https://github.com/lmestel))
- feat: apply container query polyfill to added nodes ([@lmestel](https://github.com/lmestel))
- feat: forward `ref` in any component ([@lmestel](https://github.com/lmestel))
- style: prettify scss ([@lmestel](https://github.com/lmestel))
- Merge branch 'dependabot/npm_and_yarn/prettier-2.5.0' of github.com:kickstartDS/kickstartDS into dependabot/npm_and_yarn/prettier-2.5.0 ([@lmestel](https://github.com/lmestel))
- build(deps): bump sass from 1.43.4 to 1.43.5 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- feat: add `createProvider` helper ([@lmestel](https://github.com/lmestel))
- build(deps): bump esbuild from 0.13.13 to 0.13.15 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- fix object & array handling in unpack helper [#584](https://github.com/kickstartDS/kickstartDS/pull/584) ([@lmestel](https://github.com/lmestel))
- fix: fix object & array handling in unpack helper ([@lmestel](https://github.com/lmestel))
- build(deps): bump pubsub-js from 1.9.3 to 1.9.4 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/runtime from 7.16.0 to 7.16.3 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.13.12 to 0.13.13 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- feat: add container queries polyfill ([@lmestel](https://github.com/lmestel))

#### 🏠 Internal

- transpile jsx imports in js at buildtime [#832](https://github.com/kickstartDS/kickstartDS/pull/832) ([@lmestel](https://github.com/lmestel))
- remove legacy instance [#824](https://github.com/kickstartDS/kickstartDS/pull/824) ([@lmestel](https://github.com/lmestel))
- update stylelint [#653](https://github.com/kickstartDS/kickstartDS/pull/653) ([@lmestel](https://github.com/lmestel))

#### 🔩 Dependency Updates

- build(deps): bump @babel/core from 7.19.1 to 7.19.6 [#1172](https://github.com/kickstartDS/kickstartDS/pull/1172) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump postcss from 8.4.16 to 8.4.17 [#1159](https://github.com/kickstartDS/kickstartDS/pull/1159) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @wordpress/babel-plugin-import-jsx-pragma from 4.1.0 to 4.2.0 [#1158](https://github.com/kickstartDS/kickstartDS/pull/1158) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.42 to 0.15.10 [#1154](https://github.com/kickstartDS/kickstartDS/pull/1154) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump postcss-scss from 4.0.4 to 4.0.5 [#1150](https://github.com/kickstartDS/kickstartDS/pull/1150) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.52.1 to 1.55.0 [#1146](https://github.com/kickstartDS/kickstartDS/pull/1146) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump auto from 10.37.1 to 10.37.6 [#1122](https://github.com/kickstartDS/kickstartDS/pull/1122) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps-dev): bump lerna from 5.4.2 to 5.5.2 [#1126](https://github.com/kickstartDS/kickstartDS/pull/1126) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/core from 7.18.5 to 7.19.1 [#1123](https://github.com/kickstartDS/kickstartDS/pull/1123) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.51.0 to 1.52.1 [#1054](https://github.com/kickstartDS/kickstartDS/pull/1054) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @kickstartds/storybook-addon-component-tokens from 0.1.5 to 0.1.6 [#1045](https://github.com/kickstartDS/kickstartDS/pull/1045) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps): bump esbuild from 0.14.38 to 0.14.42 [#1044](https://github.com/kickstartDS/kickstartDS/pull/1044) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump lint-staged from 12.4.0 to 12.4.1 [#1020](https://github.com/kickstartDS/kickstartDS/pull/1020) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.50.1 to 1.51.0 [#1010](https://github.com/kickstartDS/kickstartDS/pull/1010) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump stylelint from 14.6.1 to 14.8.1 [#1016](https://github.com/kickstartDS/kickstartDS/pull/1016) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.36 to 0.14.38 [#1011](https://github.com/kickstartDS/kickstartDS/pull/1011) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.50.0 to 1.50.1 [#1004](https://github.com/kickstartDS/kickstartDS/pull/1004) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump react-markdown from 8.0.2 to 8.0.3 [#1005](https://github.com/kickstartDS/kickstartDS/pull/1005) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump autoprefixer from 10.4.4 to 10.4.5 [#1003](https://github.com/kickstartDS/kickstartDS/pull/1003) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump fs-extra from 10.0.1 to 10.1.0 [#1000](https://github.com/kickstartDS/kickstartDS/pull/1000) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/core from 7.17.8 to 7.17.9 [#964](https://github.com/kickstartDS/kickstartDS/pull/964) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.35 to 0.14.36 [#982](https://github.com/kickstartDS/kickstartDS/pull/982) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @storybook/core from 6.4.20 to 6.4.21 [#981](https://github.com/kickstartDS/kickstartDS/pull/981) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.32 to 0.14.35 [#979](https://github.com/kickstartDS/kickstartDS/pull/979) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.49.11 to 1.50.0 [#963](https://github.com/kickstartDS/kickstartDS/pull/963) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.31 to 0.14.32 [#960](https://github.com/kickstartDS/kickstartDS/pull/960) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump cssnano from 5.1.5 to 5.1.7 [#955](https://github.com/kickstartDS/kickstartDS/pull/955) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.29 to 0.14.31 [#954](https://github.com/kickstartDS/kickstartDS/pull/954) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.49.10 to 1.49.11 [#953](https://github.com/kickstartDS/kickstartDS/pull/953) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.49.9 to 1.49.10 [#948](https://github.com/kickstartDS/kickstartDS/pull/948) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.28 to 0.14.29 [#947](https://github.com/kickstartDS/kickstartDS/pull/947) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump stylelint from 14.6.0 to 14.6.1 [#945](https://github.com/kickstartDS/kickstartDS/pull/945) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.27 to 0.14.28 [#943](https://github.com/kickstartDS/kickstartDS/pull/943) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @wordpress/babel-plugin-import-jsx-pragma from 3.1.1 to 3.1.2 [#903](https://github.com/kickstartDS/kickstartDS/pull/903) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump react-markdown from 8.0.0 to 8.0.1 [#912](https://github.com/kickstartDS/kickstartDS/pull/912) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/core from 7.17.5 to 7.17.8 [#924](https://github.com/kickstartDS/kickstartDS/pull/924) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.70.0 to 2.70.1 [#909](https://github.com/kickstartDS/kickstartDS/pull/909) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.25 to 0.14.27 [#908](https://github.com/kickstartDS/kickstartDS/pull/908) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump countup.js from 2.0.8 to 2.1.0 [#886](https://github.com/kickstartDS/kickstartDS/pull/886) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @types/react-dom from 17.0.11 to 17.0.13 [#885](https://github.com/kickstartDS/kickstartDS/pull/885) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.68.0 to 2.70.0 [#892](https://github.com/kickstartDS/kickstartDS/pull/892) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.23 to 0.14.25 [#890](https://github.com/kickstartDS/kickstartDS/pull/890) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.49.8 to 1.49.9 [#878](https://github.com/kickstartDS/kickstartDS/pull/878) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.67.3 to 2.68.0 [#873](https://github.com/kickstartDS/kickstartDS/pull/873) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump fs-extra from 10.0.0 to 10.0.1 [#874](https://github.com/kickstartDS/kickstartDS/pull/874) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump stylelint from 14.5.1 to 14.5.2 [#872](https://github.com/kickstartDS/kickstartDS/pull/872) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump bourbon from 7.0.0 to 7.2.0 [#869](https://github.com/kickstartDS/kickstartDS/pull/869) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/core from 7.17.4 to 7.17.5 [#859](https://github.com/kickstartDS/kickstartDS/pull/859) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump storybook-dark-mode from 1.0.8 to 1.0.9 [#860](https://github.com/kickstartDS/kickstartDS/pull/860) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.22 to 0.14.23 [#863](https://github.com/kickstartDS/kickstartDS/pull/863) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.49.7 to 1.49.8 [#858](https://github.com/kickstartDS/kickstartDS/pull/858) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump stylelint from 14.5.0 to 14.5.1 [#855](https://github.com/kickstartDS/kickstartDS/pull/855) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.21 to 0.14.22 [#856](https://github.com/kickstartDS/kickstartDS/pull/856) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump stylelint from 14.4.0 to 14.5.0 [#835](https://github.com/kickstartDS/kickstartDS/pull/835) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump json-csv from 4.0.2 to 4.0.3 [#825](https://github.com/kickstartDS/kickstartDS/pull/825) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/core from 7.17.0 to 7.17.2 [#821](https://github.com/kickstartDS/kickstartDS/pull/821) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.20 to 0.14.21 [#826](https://github.com/kickstartDS/kickstartDS/pull/826) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.18 to 0.14.20 [#816](https://github.com/kickstartDS/kickstartDS/pull/816) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump chromatic from 6.4.1 to 6.4.3 [#808](https://github.com/kickstartDS/kickstartDS/pull/808) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.49.0 to 1.49.7 [#810](https://github.com/kickstartDS/kickstartDS/pull/810) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.11 to 0.14.18 [#802](https://github.com/kickstartDS/kickstartDS/pull/802) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump chromatic from 6.3.4 to 6.4.0 [#761](https://github.com/kickstartDS/kickstartDS/pull/761) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.48.0 to 1.49.0 [#762](https://github.com/kickstartDS/kickstartDS/pull/762) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @storybook/core from 6.4.12 to 6.4.13 [#752](https://github.com/kickstartDS/kickstartDS/pull/752) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.63.0 to 2.64.0 [#756](https://github.com/kickstartDS/kickstartDS/pull/756) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump fast-glob from 3.2.10 to 3.2.11 [#751](https://github.com/kickstartDS/kickstartDS/pull/751) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.47.0 to 1.48.0 [#747](https://github.com/kickstartDS/kickstartDS/pull/747) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump chromatic from 6.3.3 to 6.3.4 [#738](https://github.com/kickstartDS/kickstartDS/pull/738) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.46.0 to 1.47.0 [#739](https://github.com/kickstartDS/kickstartDS/pull/739) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.10 to 0.14.11 [#737](https://github.com/kickstartDS/kickstartDS/pull/737) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/core from 7.16.5 to 7.16.7 [#719](https://github.com/kickstartDS/kickstartDS/pull/719) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump postcss-scss from 4.0.2 to 4.0.3 [#733](https://github.com/kickstartDS/kickstartDS/pull/733) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump fast-glob from 3.2.7 to 3.2.10 [#732](https://github.com/kickstartDS/kickstartDS/pull/732) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump lint-staged from 12.1.3 to 12.1.5 [#716](https://github.com/kickstartDS/kickstartDS/pull/716) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump react-markdown from 7.1.1 to 7.1.2 [#713](https://github.com/kickstartDS/kickstartDS/pull/713) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.45.0 to 1.46.0 [#712](https://github.com/kickstartDS/kickstartDS/pull/712) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.14.3 to 0.14.10 [#711](https://github.com/kickstartDS/kickstartDS/pull/711) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/core from 7.16.0 to 7.16.5 [#689](https://github.com/kickstartDS/kickstartDS/pull/689) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps): bump postcss from 8.4.4 to 8.4.5 [#688](https://github.com/kickstartDS/kickstartDS/pull/688) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.43.5 to 1.45.0 [#683](https://github.com/kickstartDS/kickstartDS/pull/683) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps): bump date-fns from 2.26.0 to 2.27.0 [#668](https://github.com/kickstartDS/kickstartDS/pull/668) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.13.15 to 0.14.3 [#667](https://github.com/kickstartDS/kickstartDS/pull/667) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @types/react from 17.0.35 to 17.0.37 [#614](https://github.com/kickstartDS/kickstartDS/pull/614) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump prettier from 2.4.1 to 2.5.0 [#615](https://github.com/kickstartDS/kickstartDS/pull/615) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps): bump sass from 1.43.4 to 1.43.5 [#616](https://github.com/kickstartDS/kickstartDS/pull/616) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @commitlint/config-conventional from 14.1.0 to 15.0.0 [#594](https://github.com/kickstartDS/kickstartDS/pull/594) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump lint-staged from 11.2.6 to 12.1.2 [#604](https://github.com/kickstartDS/kickstartDS/pull/604) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/preset-env from 7.16.0 to 7.16.4 [#591](https://github.com/kickstartDS/kickstartDS/pull/591) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.13.13 to 0.13.15 [#601](https://github.com/kickstartDS/kickstartDS/pull/601) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/runtime from 7.16.0 to 7.16.3 [#577](https://github.com/kickstartDS/kickstartDS/pull/577) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.6.13 to 2.6.14 [#578](https://github.com/kickstartDS/kickstartDS/pull/578) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump pubsub-js from 1.9.3 to 1.9.4 [#581](https://github.com/kickstartDS/kickstartDS/pull/581) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.13.12 to 0.13.13 [#576](https://github.com/kickstartDS/kickstartDS/pull/576) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 5

- [@dependabot[bot]](https://github.com/dependabot[bot])
- [@fleven-kds](https://github.com/fleven-kds)
- Daniel ([@DanielLeyUX](https://github.com/DanielLeyUX))
- Jonas Ulrich ([@julrich](https://github.com/julrich))
- Lukas Mestel ([@lmestel](https://github.com/lmestel))

---

# v1.5.0 (Mon Nov 08 2021)

#### 🚀 Enhancement

- don't create argType if schema property has `const` keyword [#560](https://github.com/kickstartDS/kickstartDS/pull/560) ([@lmestel](https://github.com/lmestel))

#### 🐛 Bug Fix

- build(deps-dev): bump storybook-design-token from 1.3.0 to 1.4.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- feat: don't create argType if property has `const` keyword ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into dependabot/npm_and_yarn/commitlint/cli-14.1.0 ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into dependabot/npm_and_yarn/babel/core-7.16.0 ([@lmestel](https://github.com/lmestel))
- build(deps): bump @babel/runtime from 7.15.4 to 7.16.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.13.9 to 0.13.12 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump storybook-design-token from 1.2.3 to 1.3.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.43.3 to 1.43.4 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.43.2 to 1.43.3 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.13.5 to 0.13.9 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.42.1 to 1.43.2 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Merge branch 'next' into dependabot/npm_and_yarn/storybook/core-6.3.11 ([@lmestel](https://github.com/lmestel))
- build(deps): bump esbuild from 0.13.4 to 0.13.5 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Merge branch 'next' into dependabot/npm_and_yarn/storybook/core-6.3.10 ([@lmestel](https://github.com/lmestel))
- build(deps): bump esbuild from 0.13.3 to 0.13.4 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump storybook-design-token from 1.2.2 to 1.2.3 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.13.2 to 0.13.3 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump storybook-design-token from 1.2.0 to 1.2.2 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.13.1 to 0.13.2 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.42.0 to 1.42.1 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.28 to 0.13.1 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.41.1 to 1.42.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.41.0 to 1.41.1 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.40.0 to 1.41.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.39.2 to 1.40.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.27 to 0.12.28 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.26 to 0.12.27 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- add `className` to any schema [#392](https://github.com/kickstartDS/kickstartDS/pull/392) ([@lmestel](https://github.com/lmestel))
- style: prettify code ([@lmestel](https://github.com/lmestel))
- build(deps): bump esbuild from 0.12.25 to 0.12.26 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.39.0 to 1.39.2 ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### 🏠 Internal

- don't restore yarn cache if `yarn.lock` has changed [#525](https://github.com/kickstartDS/kickstartDS/pull/525) ([@lmestel](https://github.com/lmestel))

#### 🔩 Dependency Updates

- build(deps-dev): bump storybook-design-token from 1.3.0 to 1.4.0 [#563](https://github.com/kickstartDS/kickstartDS/pull/563) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.6.12 to 2.6.13 [#539](https://github.com/kickstartDS/kickstartDS/pull/539) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/core from 7.15.8 to 7.16.0 [#545](https://github.com/kickstartDS/kickstartDS/pull/545) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps-dev): bump storybook-design-token from 1.2.3 to 1.3.0 [#540](https://github.com/kickstartDS/kickstartDS/pull/540) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.58.3 to 2.59.0 [#548](https://github.com/kickstartDS/kickstartDS/pull/548) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump chromatic from 6.0.4 to 6.0.5 [#538](https://github.com/kickstartDS/kickstartDS/pull/538) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.13.9 to 0.13.12 [#547](https://github.com/kickstartDS/kickstartDS/pull/547) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump lint-staged from 11.2.4 to 11.2.6 [#535](https://github.com/kickstartDS/kickstartDS/pull/535) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.6.11 to 2.6.12 [#536](https://github.com/kickstartDS/kickstartDS/pull/536) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.43.3 to 1.43.4 [#534](https://github.com/kickstartDS/kickstartDS/pull/534) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @types/react from 17.0.29 to 17.0.32 [#515](https://github.com/kickstartDS/kickstartDS/pull/515) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.13.5 to 0.13.9 [#514](https://github.com/kickstartDS/kickstartDS/pull/514) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.43.2 to 1.43.3 [#521](https://github.com/kickstartDS/kickstartDS/pull/521) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump chromatic from 6.0.2 to 6.0.4 [#499](https://github.com/kickstartDS/kickstartDS/pull/499) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.42.1 to 1.43.2 [#500](https://github.com/kickstartDS/kickstartDS/pull/500) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @commitlint/cli from 13.2.0 to 13.2.1 [#482](https://github.com/kickstartDS/kickstartDS/pull/482) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump chromatic from 5.10.2 to 6.0.2 [#491](https://github.com/kickstartDS/kickstartDS/pull/491) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.13.4 to 0.13.5 [#488](https://github.com/kickstartDS/kickstartDS/pull/488) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump date-fns from 2.24.0 to 2.25.0 [#468](https://github.com/kickstartDS/kickstartDS/pull/468) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.13.3 to 0.13.4 [#467](https://github.com/kickstartDS/kickstartDS/pull/467) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @storybook/core from 6.3.8 to 6.3.9 [#458](https://github.com/kickstartDS/kickstartDS/pull/458) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps): bump esbuild from 0.13.2 to 0.13.3 [#441](https://github.com/kickstartDS/kickstartDS/pull/441) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump storybook-design-token from 1.2.0 to 1.2.2 [#435](https://github.com/kickstartDS/kickstartDS/pull/435) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump simplebar from 5.3.5 to 5.3.6 [#430](https://github.com/kickstartDS/kickstartDS/pull/430) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.13.1 to 0.13.2 [#429](https://github.com/kickstartDS/kickstartDS/pull/429) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.5.8 to 2.5.10 [#418](https://github.com/kickstartDS/kickstartDS/pull/418) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump postcss from 8.3.6 to 8.3.7 [#426](https://github.com/kickstartDS/kickstartDS/pull/426) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.42.0 to 1.42.1 [#428](https://github.com/kickstartDS/kickstartDS/pull/428) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.28 to 0.13.1 [#427](https://github.com/kickstartDS/kickstartDS/pull/427) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @types/react from 17.0.21 to 17.0.22 [#419](https://github.com/kickstartDS/kickstartDS/pull/419) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.41.1 to 1.42.0 [#420](https://github.com/kickstartDS/kickstartDS/pull/420) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.5.6 to 2.5.8 [#415](https://github.com/kickstartDS/kickstartDS/pull/415) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump postcss-sort-media-queries from 3.11.12 to 4.1.0 [#397](https://github.com/kickstartDS/kickstartDS/pull/397) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump prettier from 2.4.0 to 2.4.1 [#412](https://github.com/kickstartDS/kickstartDS/pull/412) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.41.0 to 1.41.1 [#413](https://github.com/kickstartDS/kickstartDS/pull/413) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.40.0 to 1.41.0 [#403](https://github.com/kickstartDS/kickstartDS/pull/403) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.39.2 to 1.40.0 [#400](https://github.com/kickstartDS/kickstartDS/pull/400) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.27 to 0.12.28 [#399](https://github.com/kickstartDS/kickstartDS/pull/399) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump typescript from 4.4.2 to 4.4.3 [#394](https://github.com/kickstartDS/kickstartDS/pull/394) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump json-schema-to-typescript from 10.1.4 to 10.1.5 [#396](https://github.com/kickstartDS/kickstartDS/pull/396) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.26 to 0.12.27 [#395](https://github.com/kickstartDS/kickstartDS/pull/395) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/preset-env from 7.15.4 to 7.15.6 [#390](https://github.com/kickstartDS/kickstartDS/pull/390) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.25 to 0.12.26 [#389](https://github.com/kickstartDS/kickstartDS/pull/389) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.39.0 to 1.39.2 [#388](https://github.com/kickstartDS/kickstartDS/pull/388) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump prettier from 2.3.2 to 2.4.0 [#391](https://github.com/kickstartDS/kickstartDS/pull/391) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 2

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Lukas Mestel ([@lmestel](https://github.com/lmestel))

---

# v1.4.0 (Thu Sep 09 2021)

#### 🐛 Bug Fix

- build(deps): bump @babel/runtime from 7.15.3 to 7.15.4 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.24 to 0.12.25 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- fix: optional src attribute for visual picture [#367](https://github.com/kickstartDS/kickstartDS/pull/367) ([@julrich](https://github.com/julrich))
- build(deps): bump sass from 1.38.2 to 1.39.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.38.1 to 1.38.2 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.23 to 0.12.24 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.22 to 0.12.23 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Merge branch 'master' into next ([@lmestel](https://github.com/lmestel))
- build(deps): bump sass from 1.38.0 to 1.38.1 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.21 to 0.12.22 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- remove storytelling from critical styles [#338](https://github.com/kickstartDS/kickstartDS/pull/338) ([@lmestel](https://github.com/lmestel))
- build(deps): bump esbuild from 0.12.20 to 0.12.21 ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### 🔩 Dependency Updates

- build(deps-dev): bump vite from 2.5.2 to 2.5.3 [#368](https://github.com/kickstartDS/kickstartDS/pull/368) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump autoprefixer from 10.3.3 to 10.3.4 [#372](https://github.com/kickstartDS/kickstartDS/pull/372) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/core from 7.15.0 to 7.15.4 [#370](https://github.com/kickstartDS/kickstartDS/pull/370) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.24 to 0.12.25 [#374](https://github.com/kickstartDS/kickstartDS/pull/374) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.38.2 to 1.39.0 [#369](https://github.com/kickstartDS/kickstartDS/pull/369) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.23 to 0.12.24 [#361](https://github.com/kickstartDS/kickstartDS/pull/361) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.38.1 to 1.38.2 [#362](https://github.com/kickstartDS/kickstartDS/pull/362) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.22 to 0.12.23 [#355](https://github.com/kickstartDS/kickstartDS/pull/355) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.38.0 to 1.38.1 [#349](https://github.com/kickstartDS/kickstartDS/pull/349) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump json-csv from 3.0.6 to 4.0.0 [#345](https://github.com/kickstartDS/kickstartDS/pull/345) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump autoprefixer from 10.3.1 to 10.3.2 [#346](https://github.com/kickstartDS/kickstartDS/pull/346) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.21 to 0.12.22 [#347](https://github.com/kickstartDS/kickstartDS/pull/347) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.20 to 0.12.21 [#340](https://github.com/kickstartDS/kickstartDS/pull/340) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 3

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Jonas Ulrich ([@julrich](https://github.com/julrich))
- Lukas Mestel ([@lmestel](https://github.com/lmestel))

---

# v1.3.0 (Tue Aug 17 2021)

#### 🚀 Enhancement

- add scroll offset token [#328](https://github.com/kickstartDS/kickstartDS/pull/328) ([@lmestel](https://github.com/lmestel))

#### 🐛 Bug Fix

- build(deps): bump sass from 1.37.5 to 1.38.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- move breakpoint css token to base.css [#327](https://github.com/kickstartDS/kickstartDS/pull/327) ([@lmestel](https://github.com/lmestel))
- feat: add scroll offset token ([@lmestel](https://github.com/lmestel))
- fix: fix previous merge ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into hotfix/breakpoints ([@lmestel](https://github.com/lmestel))
- fix: move breakpoint css token to base.css ([@lmestel](https://github.com/lmestel))
- build(deps): bump esbuild from 0.12.19 to 0.12.20 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/runtime from 7.14.8 to 7.15.3 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.18 to 0.12.19 ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### 🔩 Dependency Updates

- build(deps-dev): bump vite from 2.4.4 to 2.5.0 [#335](https://github.com/kickstartDS/kickstartDS/pull/335) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.37.5 to 1.38.0 [#334](https://github.com/kickstartDS/kickstartDS/pull/334) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump auto from 10.30.0 to 10.31.0 [#324](https://github.com/kickstartDS/kickstartDS/pull/324) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.19 to 0.12.20 [#322](https://github.com/kickstartDS/kickstartDS/pull/322) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/runtime from 7.14.8 to 7.15.3 [#319](https://github.com/kickstartDS/kickstartDS/pull/319) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @types/react from 17.0.16 to 17.0.17 [#318](https://github.com/kickstartDS/kickstartDS/pull/318) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.56.0 to 2.56.2 [#317](https://github.com/kickstartDS/kickstartDS/pull/317) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.18 to 0.12.19 [#309](https://github.com/kickstartDS/kickstartDS/pull/309) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 3

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Jonas Ulrich ([@julrich](https://github.com/julrich))
- Lukas Mestel ([@lmestel](https://github.com/lmestel))

---

# v1.2.0 (Fri Aug 06 2021)

#### 🚀 Enhancement

- adjust spacing tokens [#283](https://github.com/kickstartDS/kickstartDS/pull/283) ([@lmestel](https://github.com/lmestel))
- add table component [#279](https://github.com/kickstartDS/kickstartDS/pull/279) ([@lmestel](https://github.com/lmestel))
- add blog-teaser & blog-head [#224](https://github.com/kickstartDS/kickstartDS/pull/224) ([@lmestel](https://github.com/lmestel))
- add headline to visual [#163](https://github.com/kickstartDS/kickstartDS/pull/163) ([@julrich](https://github.com/julrich) [@lmestel](https://github.com/lmestel))
- add rgb color tokens for button [#270](https://github.com/kickstartDS/kickstartDS/pull/270) ([@lmestel](https://github.com/lmestel))
- add rgb color tokens [#269](https://github.com/kickstartDS/kickstartDS/pull/269) ([@lmestel](https://github.com/lmestel))

#### 🐛 Bug Fix

- adjust spacing tokens [#300](https://github.com/kickstartDS/kickstartDS/pull/300) ([@lmestel](https://github.com/lmestel))
- fix: adjust spacing values ([@lmestel](https://github.com/lmestel))
- set icon button size relative to font-size [#286](https://github.com/kickstartDS/kickstartDS/pull/286) ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into docs/html-addon ([@lmestel](https://github.com/lmestel))
- build(deps): bump esbuild from 0.12.17 to 0.12.18 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- docs: add icons page to storybook ([@lmestel](https://github.com/lmestel))
- docs: add storybook design-tokens addon ([@lmestel](https://github.com/lmestel))
- feat: calculate default spacing with modular scale ([@lmestel](https://github.com/lmestel))
- feat: add token for content padding ([@lmestel](https://github.com/lmestel))
- build(deps): bump sass from 1.37.2 to 1.37.5 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build: fix default values for nested array schema ([@lmestel](https://github.com/lmestel))
- build(deps): bump sass from 1.37.0 to 1.37.2 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.36.0 to 1.37.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- refactor: add generic color helper ([@lmestel](https://github.com/lmestel))
- refactor: dry color token generation ([@lmestel](https://github.com/lmestel))
- feat: add secondary color rgb tokens ([@lmestel](https://github.com/lmestel))
- refactor: move color calculation to runtime ([@lmestel](https://github.com/lmestel))
- build(deps): bump esbuild from 0.12.16 to 0.12.17 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.15 to 0.12.16 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.35.2 to 1.36.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Merge branch 'next' into feature/blog ([@lmestel](https://github.com/lmestel))
- Revert "chore: trigger release" [#239](https://github.com/kickstartDS/kickstartDS/pull/239) ([@lmestel](https://github.com/lmestel))
- Revert "chore: trigger release" ([@lmestel](https://github.com/lmestel))
- chore: trigger release [#238](https://github.com/kickstartDS/kickstartDS/pull/238) ([@lmestel](https://github.com/lmestel))
- chore: trigger release ([@lmestel](https://github.com/lmestel))
- docs: refactor argTypes geneator ([@lmestel](https://github.com/lmestel))
- docs: add required information to args table ([@lmestel](https://github.com/lmestel))
- docs: add type information to args table ([@lmestel](https://github.com/lmestel))
- docs: fix array default controls ([@lmestel](https://github.com/lmestel))
- build(deps): bump @babel/runtime from 7.14.6 to 7.14.8 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Merge branch 'master' into next ([@lmestel](https://github.com/lmestel))
- fix: fix breakpoints parser [#216](https://github.com/kickstartDS/kickstartDS/pull/216) ([@lmestel](https://github.com/lmestel))
- fix: fix breakpoints parser ([@lmestel](https://github.com/lmestel))
- docs: fix pack & unpack helper array handling ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into feature/add-real-headline-to-visual ([@lmestel](https://github.com/lmestel))

#### 📝 Documentation

- add storybook-addon-html addon [#246](https://github.com/kickstartDS/kickstartDS/pull/246) ([@lmestel](https://github.com/lmestel))
- add storybook design-tokens addon [#293](https://github.com/kickstartDS/kickstartDS/pull/293) ([@lmestel](https://github.com/lmestel))
- storybook controls [#214](https://github.com/kickstartDS/kickstartDS/pull/214) ([@lmestel](https://github.com/lmestel))

#### 🔩 Dependency Updates

- build(deps): bump esbuild from 0.12.17 to 0.12.18 [#297](https://github.com/kickstartDS/kickstartDS/pull/297) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.55.1 to 2.56.0 [#295](https://github.com/kickstartDS/kickstartDS/pull/295) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.37.2 to 1.37.5 [#282](https://github.com/kickstartDS/kickstartDS/pull/282) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.37.0 to 1.37.2 [#278](https://github.com/kickstartDS/kickstartDS/pull/278) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump eslint from 7.31.0 to 7.32.0 [#275](https://github.com/kickstartDS/kickstartDS/pull/275) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/preset-env from 7.14.8 to 7.14.9 [#273](https://github.com/kickstartDS/kickstartDS/pull/273) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.36.0 to 1.37.0 [#276](https://github.com/kickstartDS/kickstartDS/pull/276) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.55.0 to 2.55.1 [#267](https://github.com/kickstartDS/kickstartDS/pull/267) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.16 to 0.12.17 [#268](https://github.com/kickstartDS/kickstartDS/pull/268) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.15 to 0.12.16 [#252](https://github.com/kickstartDS/kickstartDS/pull/252) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @types/react from 17.0.14 to 17.0.15 [#244](https://github.com/kickstartDS/kickstartDS/pull/244) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @commitlint/config-conventional from 12.1.4 to 13.1.0 [#242](https://github.com/kickstartDS/kickstartDS/pull/242) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.35.2 to 1.36.0 [#241](https://github.com/kickstartDS/kickstartDS/pull/241) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump postcss from 8.3.5 to 8.3.6 [#222](https://github.com/kickstartDS/kickstartDS/pull/222) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump cssnano from 5.0.6 to 5.0.7 [#221](https://github.com/kickstartDS/kickstartDS/pull/221) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.4.2 to 2.4.3 [#217](https://github.com/kickstartDS/kickstartDS/pull/217) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/preset-env from 7.14.7 to 7.14.8 [#220](https://github.com/kickstartDS/kickstartDS/pull/220) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/runtime from 7.14.6 to 7.14.8 [#218](https://github.com/kickstartDS/kickstartDS/pull/218) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 3

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Jonas Ulrich ([@julrich](https://github.com/julrich))
- Lukas Mestel ([@lmestel](https://github.com/lmestel))

---

# v1.1.2 (Thu Jul 15 2021)

#### 🐛 Bug Fix

- Merge branch 'next' into fix/more-schema-fixes ([@julrich](https://github.com/julrich))
- build(deps): bump htm from 3.0.4 to 3.1.0 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.52.8 to 2.53.1 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.3.8 to 2.4.1 [#178](https://github.com/kickstartDS/kickstartDS/pull/178) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@julrich](https://github.com/julrich) [@lmestel](https://github.com/lmestel))
- Merge branch 'next' into dependabot/npm_and_yarn/vite-2.4.1 ([@lmestel](https://github.com/lmestel))
- fix(dependencies): update dependencies ([@julrich](https://github.com/julrich))
- build(deps): bump sass from 1.35.1 to 1.35.2 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.14 to 0.12.15 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- merge latest fixes from master [#170](https://github.com/kickstartDS/kickstartDS/pull/170) ([@julrich](https://github.com/julrich) [@lmestel](https://github.com/lmestel))

#### 🔩 Dependency Updates

- build(deps): bump autoprefixer from 10.2.6 to 10.3.1 [#207](https://github.com/kickstartDS/kickstartDS/pull/207) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.4.1 to 2.4.2 [#205](https://github.com/kickstartDS/kickstartDS/pull/205) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump htm from 3.0.4 to 3.1.0 [#204](https://github.com/kickstartDS/kickstartDS/pull/204) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump babel-plugin-transform-jsx-to-htm from 2.1.0 to 2.2.0 [#197](https://github.com/kickstartDS/kickstartDS/pull/197) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.52.7 to 2.52.8 [#182](https://github.com/kickstartDS/kickstartDS/pull/182) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @storybook/cli from 6.3.2 to 6.3.3 [#183](https://github.com/kickstartDS/kickstartDS/pull/183) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump sass from 1.35.1 to 1.35.2 [#184](https://github.com/kickstartDS/kickstartDS/pull/184) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.14 to 0.12.15 [#179](https://github.com/kickstartDS/kickstartDS/pull/179) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 3

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Jonas Ulrich ([@julrich](https://github.com/julrich))
- Lukas Mestel ([@lmestel](https://github.com/lmestel))

---

# v1.1.1 (Sun Jul 04 2021)

#### ⚠️ Pushed to `master`

- chore(documentation): trigger another release for packages ([@julrich](https://github.com/julrich))

#### Authors: 1

- Jonas Ulrich ([@julrich](https://github.com/julrich))

---

# v1.1.0 (Sun Jul 04 2021)

#### 🚀 Enhancement

- feat(documentation): trigger a release to fix versioning [#166](https://github.com/kickstartDS/kickstartDS/pull/166) ([@julrich](https://github.com/julrich))

#### 🐛 Bug Fix

- feat(documentation): trigger a release to fix versioning ([@julrich](https://github.com/julrich))
- chore(documentation): update formatting in `README.md`s ([@julrich](https://github.com/julrich))
- fix(documentation): add updated CHANGELOG.md to release [#164](https://github.com/kickstartDS/kickstartDS/pull/164) ([@julrich](https://github.com/julrich))
- chore(documentation): add CHANGELOG.md hint to module README.mds ([@julrich](https://github.com/julrich))

#### Authors: 1

- Jonas Ulrich ([@julrich](https://github.com/julrich))

---

# v1.0.0 (Fri Jul 02 2021)

:tada: This release contains work from a new contributor! :tada:

Thank you, Jonas Ulrich ([@julrich](https://github.com/julrich)), for all your work!

#### 🐛 Bug Fix

- fix: bundle only kickstartDS modules [#161](https://github.com/kickstartDS/kickstartDS/pull/161) ([@lmestel](https://github.com/lmestel))
- fix: get bundle from node_modules ([@lmestel](https://github.com/lmestel))
- fix: bundle only kickstartDS modules ([@lmestel](https://github.com/lmestel))
- fix: escape media-queries in breakpoints token [#150](https://github.com/kickstartDS/kickstartDS/pull/150) ([@lmestel](https://github.com/lmestel))
- build(deps): bump esbuild from 0.12.13 to 0.12.14 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- fix: escape media-queries in breakpoints token ([@lmestel](https://github.com/lmestel))
- build(deps): bump esbuild from 0.11.23 to 0.12.13 ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Hotfix/ssr [#131](https://github.com/kickstartDS/kickstartDS/pull/131) ([@lmestel](https://github.com/lmestel))
- fix: read breakpoints from custom property ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into dependabot/npm_and_yarn/fast-glob-3.2.6 ([@lmestel](https://github.com/lmestel))
- Merge branch 'next' into dependabot/npm_and_yarn/prettier-2.3.2 ([@lmestel](https://github.com/lmestel))
- Feature/auto [#119](https://github.com/kickstartDS/kickstartDS/pull/119) ([@lmestel](https://github.com/lmestel) [@julrich](https://github.com/julrich))
- build: add auto release ([@lmestel](https://github.com/lmestel))
- Feature/yarn [#111](https://github.com/kickstartDS/kickstartDS/pull/111) ([@lmestel](https://github.com/lmestel))
- build: move to yarn ([@lmestel](https://github.com/lmestel))
- build: add stories to lib folder [#102](https://github.com/kickstartDS/kickstartDS/pull/102) ([@lmestel](https://github.com/lmestel))
- build: add stories to lib folder ([@lmestel](https://github.com/lmestel))
- Feature/form fields [#69](https://github.com/kickstartDS/kickstartDS/pull/69) ([@lmestel](https://github.com/lmestel))
- Feature/count up [#75](https://github.com/kickstartDS/kickstartDS/pull/75) ([@lmestel](https://github.com/lmestel))
- feat: add divider component ([@lmestel](https://github.com/lmestel))
- refactor: unify lazysizes radio messages ([@lmestel](https://github.com/lmestel))
- Merge branch 'master' into feature/form-fields ([@lmestel](https://github.com/lmestel))
- refactor: remove division in sass modules ([@lmestel](https://github.com/lmestel))
- fix: fix visual fullscreen variant [#68](https://github.com/kickstartDS/kickstartDS/pull/68) ([@lmestel](https://github.com/lmestel))
- fix: fix visual fullscreen variant ([@lmestel](https://github.com/lmestel))
- Feature/netlify cms support [#41](https://github.com/kickstartDS/kickstartDS/pull/41) ([@julrich](https://github.com/julrich) [@lmestel](https://github.com/lmestel))
- chore(faqs): added entry for why-did-you-render to faq ([@julrich](https://github.com/julrich))
- Merge branch 'master' into feature/netlify-cms-support ([@julrich](https://github.com/julrich))
- build: add final bundle to lib [#39](https://github.com/kickstartDS/kickstartDS/pull/39) ([@lmestel](https://github.com/lmestel))
- Feature/collapsible box [#37](https://github.com/kickstartDS/kickstartDS/pull/37) ([@lmestel](https://github.com/lmestel))
- refactor: move `slide`, `window` & `breakpoint` helpers to core ([@lmestel](https://github.com/lmestel))
- Feature/render props [#34](https://github.com/kickstartDS/kickstartDS/pull/34) ([@lmestel](https://github.com/lmestel))
- Feature/section [#35](https://github.com/kickstartDS/kickstartDS/pull/35) ([@lmestel](https://github.com/lmestel))
- chore: move react to peerDependencies ([@lmestel](https://github.com/lmestel))
- feat: add render props ([@lmestel](https://github.com/lmestel))
- refactor: move renderFn helper to core ([@lmestel](https://github.com/lmestel))
- feat: enhance section component ([@lmestel](https://github.com/lmestel))
- Feature/faq [#32](https://github.com/kickstartDS/kickstartDS/pull/32) ([@lmestel](https://github.com/lmestel))
- docs: remove old changelogs, add faq ([@lmestel](https://github.com/lmestel))
- Feature/ssr [#29](https://github.com/kickstartDS/kickstartDS/pull/29) ([@lmestel](https://github.com/lmestel))
- feat: enable ssr ([@lmestel](https://github.com/lmestel))
- Merge branch 'master' into feature/chromatic-monorepo ([@julrich](https://github.com/julrich))
- fix: fix storybook arg packing [#25](https://github.com/kickstartDS/kickstartDS/pull/25) ([@lmestel](https://github.com/lmestel))
- fix: fix storybook arg packing ([@lmestel](https://github.com/lmestel))
- feat: move storybook helpers to core [#24](https://github.com/kickstartDS/kickstartDS/pull/24) ([@lmestel](https://github.com/lmestel))
- feat: move storybook helpers to core ([@lmestel](https://github.com/lmestel))
- fix(merge): merge upstream changes from master ([@julrich](https://github.com/julrich))
- Feature/style refactor [#22](https://github.com/kickstartDS/kickstartDS/pull/22) ([@lmestel](https://github.com/lmestel))
- feat: add content-box conponent tokens ([@lmestel](https://github.com/lmestel))
- feat: add visual component tokens ([@lmestel](https://github.com/lmestel))
- chore(merge): merge changes from master ([@julrich](https://github.com/julrich))
- Merge branch 'master' into feature/style-refactor ([@lmestel](https://github.com/lmestel))
- build: remove core-js polyfills [#21](https://github.com/kickstartDS/kickstartDS/pull/21) ([@lmestel](https://github.com/lmestel))
- build: remove core-js polyfills ([@lmestel](https://github.com/lmestel))
- refactor: create scss vars for button & quote ([@lmestel](https://github.com/lmestel))
- Feature/watch task [#19](https://github.com/kickstartDS/kickstartDS/pull/19) ([@lmestel](https://github.com/lmestel))
- Merge branch 'master' into feature/watch-task ([@lmestel](https://github.com/lmestel))
- build: improve build task ([@lmestel](https://github.com/lmestel))
- Feature/design tokens [#14](https://github.com/kickstartDS/kickstartDS/pull/14) ([@lmestel](https://github.com/lmestel))
- refactor: move breakpoints to core ([@lmestel](https://github.com/lmestel))
- refactor: use design tokens in button ([@lmestel](https://github.com/lmestel))
- feat: add first design tokens & refactor quote component ([@lmestel](https://github.com/lmestel))
- Lib [#1](https://github.com/kickstartDS/kickstartDS/pull/1) ([@lmestel](https://github.com/lmestel))
- chore: new release ([@lmestel](https://github.com/lmestel))
- chore: fix package descriptions, update readme ([@lmestel](https://github.com/lmestel))
- build: rename `lib` task to `build`, add `prepublishOnly` task ([@lmestel](https://github.com/lmestel))
- build: add main entry point to component packages ([@lmestel](https://github.com/lmestel))
- chore: add lib folder to npm package ([@lmestel](https://github.com/lmestel))
- chore: rebrand core ([@lmestel](https://github.com/lmestel))
- build: add babel to build pipeline ([@lmestel](https://github.com/lmestel))

#### ⚠️ Pushed to `master`

- chore: new release ([@lmestel](https://github.com/lmestel))
- chore: new release ([@julrich](https://github.com/julrich))
- docs: simplify stories, add unpack decorator ([@lmestel](https://github.com/lmestel))

#### 🔩 Dependency Updates

- build(deps): bump rollup from 2.52.6 to 2.52.7 [#154](https://github.com/kickstartDS/kickstartDS/pull/154) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.12.13 to 0.12.14 [#151](https://github.com/kickstartDS/kickstartDS/pull/151) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump json-schema-faker from 0.5.0-rcv.34 to 0.5.0-rcv.35 [#138](https://github.com/kickstartDS/kickstartDS/pull/138) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump esbuild from 0.11.23 to 0.12.13 [#137](https://github.com/kickstartDS/kickstartDS/pull/137) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump eslint from 7.26.0 to 7.27.0 [#70](https://github.com/kickstartDS/kickstartDS/pull/70) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps-dev): bump stylelint from 13.13.0 to 13.13.1 [#30](https://github.com/kickstartDS/kickstartDS/pull/30) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 3

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Jonas Ulrich ([@julrich](https://github.com/julrich))
- Lukas Mestel ([@lmestel](https://github.com/lmestel))
