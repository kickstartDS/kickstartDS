# (Mon Nov 08 2021)

#### 🚀 Enhancement

- unify login- & logout icons [#524](https://github.com/kickstartDS/kickstartDS/pull/524) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.5.0`, `@kickstartds/blog@1.5.0`, `@kickstartds/content@1.5.0`, `@kickstartds/form@1.5.0`
  - add context structure to more components [#567](https://github.com/kickstartDS/kickstartDS/pull/567) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/core@1.5.0`
  - don't create argType if schema property has `const` keyword [#560](https://github.com/kickstartDS/kickstartDS/pull/560) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/form@1.5.0`
  - add input types [#498](https://github.com/kickstartDS/kickstartDS/pull/498) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.5.0`, `@kickstartds/content@1.5.0`
  - replace quote date with byline [#471](https://github.com/kickstartDS/kickstartDS/pull/471) ([@lmestel](https://github.com/lmestel))
  - add `expand` prop to count-up component [#470](https://github.com/kickstartDS/kickstartDS/pull/470) ([@lmestel](https://github.com/lmestel))
  - add `enabled` option for count-up link [#445](https://github.com/kickstartDS/kickstartDS/pull/445) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.5.0`
  - add render functions to table [#402](https://github.com/kickstartDS/kickstartDS/pull/402) ([@lmestel](https://github.com/lmestel))

#### 🐛 Bug Fix

- `@kickstartds/base@1.5.0`
  - remove background-image on lightbox arrow buttons [#553](https://github.com/kickstartDS/kickstartDS/pull/553) ([@lmestel](https://github.com/lmestel))
  - accept lightbox links without image [#537](https://github.com/kickstartDS/kickstartDS/pull/537) ([@lmestel](https://github.com/lmestel))
  - add title attribute to slider nav buttons [#456](https://github.com/kickstartDS/kickstartDS/pull/456) ([@lmestel](https://github.com/lmestel))
  - respect button size prop in content-& teaser-box [#437](https://github.com/kickstartDS/kickstartDS/pull/437) ([@lmestel](https://github.com/lmestel))
  - fix table component rerender [#405](https://github.com/kickstartDS/kickstartDS/pull/405) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.5.0`, `@kickstartds/blog@1.5.0`, `@kickstartds/content@1.5.0`, `@kickstartds/core@1.5.0`, `@kickstartds/form@1.5.0`
  - add `className` to any schema [#392](https://github.com/kickstartDS/kickstartDS/pull/392) ([@lmestel](https://github.com/lmestel))

#### 🏠 Internal

- don't restore yarn cache if `yarn.lock` has changed [#525](https://github.com/kickstartDS/kickstartDS/pull/525) ([@lmestel](https://github.com/lmestel))
- release fix [#497](https://github.com/kickstartDS/kickstartDS/pull/497) ([@lmestel](https://github.com/lmestel) [@dependabot[bot]](https://github.com/dependabot[bot]))

#### 🔩 Dependency Updates

- build(deps): bump tar from 4.4.14 to 4.4.19 [#566](https://github.com/kickstartDS/kickstartDS/pull/566) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump tmpl from 1.0.4 to 1.0.5 [#565](https://github.com/kickstartDS/kickstartDS/pull/565) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump cssnano from 5.0.9 to 5.0.10 [#564](https://github.com/kickstartDS/kickstartDS/pull/564) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump svgstore from 3.0.0-2 to 3.0.1 [#557](https://github.com/kickstartDS/kickstartDS/pull/557) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump cssnano from 5.0.8 to 5.0.9 [#554](https://github.com/kickstartDS/kickstartDS/pull/554) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @commitlint/cli from 13.2.1 to 14.1.0 [#552](https://github.com/kickstartDS/kickstartDS/pull/552) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps-dev): bump vite from 2.6.12 to 2.6.13 [#539](https://github.com/kickstartDS/kickstartDS/pull/539) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.58.3 to 2.59.0 [#548](https://github.com/kickstartDS/kickstartDS/pull/548) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump chromatic from 6.0.4 to 6.0.5 [#538](https://github.com/kickstartDS/kickstartDS/pull/538) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump autoprefixer from 10.3.7 to 10.4.0 [#541](https://github.com/kickstartDS/kickstartDS/pull/541) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump lint-staged from 11.2.4 to 11.2.6 [#535](https://github.com/kickstartDS/kickstartDS/pull/535) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.6.11 to 2.6.12 [#536](https://github.com/kickstartDS/kickstartDS/pull/536) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump auto from 10.32.1 to 10.32.2 [#530](https://github.com/kickstartDS/kickstartDS/pull/530) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.58.1 to 2.58.3 [#527](https://github.com/kickstartDS/kickstartDS/pull/527) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.6.10 to 2.6.11 [#523](https://github.com/kickstartDS/kickstartDS/pull/523) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump husky from 7.0.2 to 7.0.4 [#518](https://github.com/kickstartDS/kickstartDS/pull/518) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps): bump postcss from 8.3.9 to 8.3.11 [#520](https://github.com/kickstartDS/kickstartDS/pull/520) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @types/react-dom from 17.0.9 to 17.0.10 [#522](https://github.com/kickstartDS/kickstartDS/pull/522) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump lint-staged from 11.2.3 to 11.2.4 [#516](https://github.com/kickstartDS/kickstartDS/pull/516) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.58.0 to 2.58.1 [#517](https://github.com/kickstartDS/kickstartDS/pull/517) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @storybook/core from 6.3.11 to 6.3.12 [#504](https://github.com/kickstartDS/kickstartDS/pull/504) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump chromatic from 6.0.2 to 6.0.4 [#499](https://github.com/kickstartDS/kickstartDS/pull/499) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump typescript from 4.4.3 to 4.4.4 [#494](https://github.com/kickstartDS/kickstartDS/pull/494) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @commitlint/cli from 13.2.0 to 13.2.1 [#482](https://github.com/kickstartDS/kickstartDS/pull/482) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.6.5 to 2.6.7 [#486](https://github.com/kickstartDS/kickstartDS/pull/486) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @storybook/core from 6.3.10 to 6.3.11 [#495](https://github.com/kickstartDS/kickstartDS/pull/495) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps-dev): bump chromatic from 5.10.2 to 6.0.2 [#491](https://github.com/kickstartDS/kickstartDS/pull/491) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.6.3 to 2.6.5 [#480](https://github.com/kickstartDS/kickstartDS/pull/480) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @storybook/core from 6.3.8 to 6.3.10 [#478](https://github.com/kickstartDS/kickstartDS/pull/478) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps-dev): bump lint-staged from 11.2.0 to 11.2.3 [#483](https://github.com/kickstartDS/kickstartDS/pull/483) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/core from 7.15.5 to 7.15.8 [#474](https://github.com/kickstartDS/kickstartDS/pull/474) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.6.2 to 2.6.3 [#469](https://github.com/kickstartDS/kickstartDS/pull/469) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps-dev): bump lint-staged from 11.1.2 to 11.2.0 [#465](https://github.com/kickstartDS/kickstartDS/pull/465) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump postcss from 8.3.8 to 8.3.9 [#466](https://github.com/kickstartDS/kickstartDS/pull/466) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.57.0 to 2.58.0 [#455](https://github.com/kickstartDS/kickstartDS/pull/455) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @kickstartds/storybook-addon-component-tokens from 0.1.4 to 0.1.5 [#450](https://github.com/kickstartDS/kickstartDS/pull/450) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump chromatic from 5.10.1 to 5.10.2 [#453](https://github.com/kickstartDS/kickstartDS/pull/453) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump auto from 10.32.0 to 10.32.1 [#452](https://github.com/kickstartDS/kickstartDS/pull/452) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump postcss from 8.3.7 to 8.3.8 [#436](https://github.com/kickstartDS/kickstartDS/pull/436) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps): bump rollup-plugin-ts from 1.4.6 to 1.4.7 [#433](https://github.com/kickstartDS/kickstartDS/pull/433) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @commitlint/cli from 13.1.0 to 13.2.0 [#439](https://github.com/kickstartDS/kickstartDS/pull/439) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.5.8 to 2.5.10 [#418](https://github.com/kickstartDS/kickstartDS/pull/418) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump autoprefixer from 10.3.4 to 10.3.5 [#425](https://github.com/kickstartDS/kickstartDS/pull/425) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump postcss from 8.3.6 to 8.3.7 [#426](https://github.com/kickstartDS/kickstartDS/pull/426) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.56.3 to 2.57.0 [#424](https://github.com/kickstartDS/kickstartDS/pull/424) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup-plugin-ts from 1.4.2 to 1.4.6 [#423](https://github.com/kickstartDS/kickstartDS/pull/423) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump chromatic from 5.10.0 to 5.10.1 [#422](https://github.com/kickstartDS/kickstartDS/pull/422) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump chromatic from 5.9.2 to 5.10.0 [#417](https://github.com/kickstartDS/kickstartDS/pull/417) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.5.6 to 2.5.8 [#415](https://github.com/kickstartDS/kickstartDS/pull/415) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump postcss-sort-media-queries from 3.11.12 to 4.1.0 [#397](https://github.com/kickstartDS/kickstartDS/pull/397) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump prettier from 2.4.0 to 2.4.1 [#412](https://github.com/kickstartDS/kickstartDS/pull/412) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup-plugin-ts from 1.4.1 to 1.4.2 [#414](https://github.com/kickstartDS/kickstartDS/pull/414) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump auto from 10.31.0 to 10.32.0 [#406](https://github.com/kickstartDS/kickstartDS/pull/406) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @whitespace/storybook-addon-html from v5.2.0 to v5.3.0 [#409](https://github.com/kickstartDS/kickstartDS/pull/409) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump typescript from 4.4.2 to 4.4.3 [#394](https://github.com/kickstartDS/kickstartDS/pull/394) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump json-schema-to-typescript from 10.1.4 to 10.1.5 [#396](https://github.com/kickstartDS/kickstartDS/pull/396) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/preset-env from 7.15.4 to 7.15.6 [#390](https://github.com/kickstartDS/kickstartDS/pull/390) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump prettier from 2.3.2 to 2.4.0 [#391](https://github.com/kickstartDS/kickstartDS/pull/391) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/core@1.5.0`
  - build(deps-dev): bump storybook-design-token from 1.3.0 to 1.4.0 [#563](https://github.com/kickstartDS/kickstartDS/pull/563) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps-dev): bump storybook-design-token from 1.2.3 to 1.3.0 [#540](https://github.com/kickstartDS/kickstartDS/pull/540) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.13.9 to 0.13.12 [#547](https://github.com/kickstartDS/kickstartDS/pull/547) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump sass from 1.43.3 to 1.43.4 [#534](https://github.com/kickstartDS/kickstartDS/pull/534) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.13.5 to 0.13.9 [#514](https://github.com/kickstartDS/kickstartDS/pull/514) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump sass from 1.43.2 to 1.43.3 [#521](https://github.com/kickstartDS/kickstartDS/pull/521) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump sass from 1.42.1 to 1.43.2 [#500](https://github.com/kickstartDS/kickstartDS/pull/500) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.13.4 to 0.13.5 [#488](https://github.com/kickstartDS/kickstartDS/pull/488) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.13.3 to 0.13.4 [#467](https://github.com/kickstartDS/kickstartDS/pull/467) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps-dev): bump @storybook/core from 6.3.8 to 6.3.9 [#458](https://github.com/kickstartDS/kickstartDS/pull/458) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
  - build(deps): bump esbuild from 0.13.2 to 0.13.3 [#441](https://github.com/kickstartDS/kickstartDS/pull/441) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps-dev): bump storybook-design-token from 1.2.0 to 1.2.2 [#435](https://github.com/kickstartDS/kickstartDS/pull/435) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.13.1 to 0.13.2 [#429](https://github.com/kickstartDS/kickstartDS/pull/429) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump sass from 1.42.0 to 1.42.1 [#428](https://github.com/kickstartDS/kickstartDS/pull/428) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.12.28 to 0.13.1 [#427](https://github.com/kickstartDS/kickstartDS/pull/427) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump sass from 1.41.1 to 1.42.0 [#420](https://github.com/kickstartDS/kickstartDS/pull/420) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump sass from 1.41.0 to 1.41.1 [#413](https://github.com/kickstartDS/kickstartDS/pull/413) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump sass from 1.40.0 to 1.41.0 [#403](https://github.com/kickstartDS/kickstartDS/pull/403) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump sass from 1.39.2 to 1.40.0 [#400](https://github.com/kickstartDS/kickstartDS/pull/400) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.12.27 to 0.12.28 [#399](https://github.com/kickstartDS/kickstartDS/pull/399) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.12.26 to 0.12.27 [#395](https://github.com/kickstartDS/kickstartDS/pull/395) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.12.25 to 0.12.26 [#389](https://github.com/kickstartDS/kickstartDS/pull/389) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump sass from 1.39.0 to 1.39.2 [#388](https://github.com/kickstartDS/kickstartDS/pull/388) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/base@1.5.0`
  - build(deps-dev): bump @types/react from 17.0.33 to 17.0.34 [#558](https://github.com/kickstartDS/kickstartDS/pull/558) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps-dev): bump @types/react from 17.0.32 to 17.0.33 [#526](https://github.com/kickstartDS/kickstartDS/pull/526) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump react-markdown from 7.0.1 to 7.1.0 [#519](https://github.com/kickstartDS/kickstartDS/pull/519) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps-dev): bump @types/react from 17.0.29 to 17.0.32 [#515](https://github.com/kickstartDS/kickstartDS/pull/515) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps-dev): bump @types/react from 17.0.27 to 17.0.29 [#496](https://github.com/kickstartDS/kickstartDS/pull/496) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps-dev): bump @types/react from 17.0.26 to 17.0.27 [#461](https://github.com/kickstartDS/kickstartDS/pull/461) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps-dev): bump @types/react from 17.0.25 to 17.0.26 [#454](https://github.com/kickstartDS/kickstartDS/pull/454) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps-dev): bump @types/react from 17.0.24 to 17.0.25 [#444](https://github.com/kickstartDS/kickstartDS/pull/444) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump simplebar from 5.3.5 to 5.3.6 [#430](https://github.com/kickstartDS/kickstartDS/pull/430) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps-dev): bump @types/react from 17.0.22 to 17.0.24 [#421](https://github.com/kickstartDS/kickstartDS/pull/421) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps-dev): bump @types/react from 17.0.21 to 17.0.22 [#419](https://github.com/kickstartDS/kickstartDS/pull/419) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps-dev): bump @types/react from 17.0.20 to 17.0.21 [#404](https://github.com/kickstartDS/kickstartDS/pull/404) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/base@1.5.0`, `@kickstartds/blog@1.5.0`, `@kickstartds/content@1.5.0`, `@kickstartds/core@1.5.0`, `@kickstartds/form@1.5.0`
  - build(deps): bump @babel/core from 7.15.8 to 7.16.0 [#545](https://github.com/kickstartDS/kickstartDS/pull/545) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.5.0`, `@kickstartds/blog@1.5.0`
  - build(deps): bump date-fns from 2.24.0 to 2.25.0 [#468](https://github.com/kickstartDS/kickstartDS/pull/468) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/base@1.5.0`, `@kickstartds/blog@1.5.0`, `@kickstartds/content@1.5.0`
  - build(deps): bump date-fns from 2.23.0 to 2.24.0 [#416](https://github.com/kickstartDS/kickstartDS/pull/416) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 2

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Lukas Mestel ([@lmestel](https://github.com/lmestel))

---

# (Thu Sep 09 2021)

#### 🚀 Enhancement

- `@kickstartds/base@1.4.0`
  - add `className` property to section schema [#352](https://github.com/kickstartDS/kickstartDS/pull/352) ([@lmestel](https://github.com/lmestel))
  - add lightbox component [#341](https://github.com/kickstartDS/kickstartDS/pull/341) ([@lmestel](https://github.com/lmestel))

#### 🐛 Bug Fix

- `@kickstartds/base@1.4.0`
  - don't render empty section headline [#385](https://github.com/kickstartDS/kickstartDS/pull/385) ([@lmestel](https://github.com/lmestel))
  - add class to headline [#383](https://github.com/kickstartDS/kickstartDS/pull/383) ([@lmestel](https://github.com/lmestel))
  - overwrite lightbox icon path [#342](https://github.com/kickstartDS/kickstartDS/pull/342) ([@lmestel](https://github.com/lmestel))
  - fix text-media gallery spacing [#337](https://github.com/kickstartDS/kickstartDS/pull/337) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/content@1.4.0`
  - place quote image above text on mobile [#384](https://github.com/kickstartDS/kickstartDS/pull/384) ([@lmestel](https://github.com/lmestel))
  - fix mobile visual height [#344](https://github.com/kickstartDS/kickstartDS/pull/344) ([@lmestel](https://github.com/lmestel))
  - remove storytelling from critical styles [#338](https://github.com/kickstartDS/kickstartDS/pull/338) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.4.0`, `@kickstartds/content@1.4.0`
  - fix: optional src attribute for visual picture [#367](https://github.com/kickstartDS/kickstartDS/pull/367) ([@julrich](https://github.com/julrich))
- `@kickstartds/base@1.4.0`, `@kickstartds/blog@1.4.0`
  - fix link button fill animation [#351](https://github.com/kickstartDS/kickstartDS/pull/351) ([@lmestel](https://github.com/lmestel))

#### 🔩 Dependency Updates

- build(deps-dev): bump vite from 2.5.5 to 2.5.6 [#387](https://github.com/kickstartDS/kickstartDS/pull/387) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.5.3 to 2.5.5 [#386](https://github.com/kickstartDS/kickstartDS/pull/386) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/core from 7.15.4 to 7.15.5 [#379](https://github.com/kickstartDS/kickstartDS/pull/379) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @storybook/core from 6.3.7 to 6.3.8 [#377](https://github.com/kickstartDS/kickstartDS/pull/377) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps-dev): bump vite from 2.5.2 to 2.5.3 [#368](https://github.com/kickstartDS/kickstartDS/pull/368) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump autoprefixer from 10.3.3 to 10.3.4 [#372](https://github.com/kickstartDS/kickstartDS/pull/372) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.5.0 to 2.5.2 [#364](https://github.com/kickstartDS/kickstartDS/pull/364) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup-plugin-ts from 1.4.0 to 1.4.1 [#365](https://github.com/kickstartDS/kickstartDS/pull/365) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump json-csv from 4.0.0 to 4.0.2 [#363](https://github.com/kickstartDS/kickstartDS/pull/363) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump typescript from 4.3.5 to 4.4.2 [#356](https://github.com/kickstartDS/kickstartDS/pull/356) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump autoprefixer from 10.3.2 to 10.3.3 [#359](https://github.com/kickstartDS/kickstartDS/pull/359) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump husky from 7.0.1 to 7.0.2 [#354](https://github.com/kickstartDS/kickstartDS/pull/354) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.56.2 to 2.56.3 [#348](https://github.com/kickstartDS/kickstartDS/pull/348) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump json-csv from 3.0.6 to 4.0.0 [#345](https://github.com/kickstartDS/kickstartDS/pull/345) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump autoprefixer from 10.3.1 to 10.3.2 [#346](https://github.com/kickstartDS/kickstartDS/pull/346) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump cssnano from 5.0.7 to 5.0.8 [#339](https://github.com/kickstartDS/kickstartDS/pull/339) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/base@1.4.0`
  - build(deps-dev): bump @types/react from 17.0.19 to 17.0.20 [#376](https://github.com/kickstartDS/kickstartDS/pull/376) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump react-markdown from 7.0.0 to 7.0.1 [#357](https://github.com/kickstartDS/kickstartDS/pull/357) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps-dev): bump @types/react from 17.0.18 to 17.0.19 [#343](https://github.com/kickstartDS/kickstartDS/pull/343) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/base@1.4.0`, `@kickstartds/blog@1.4.0`, `@kickstartds/content@1.4.0`, `@kickstartds/core@1.4.0`, `@kickstartds/form@1.4.0`
  - build(deps): bump @babel/core from 7.15.0 to 7.15.4 [#370](https://github.com/kickstartDS/kickstartDS/pull/370) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/core@1.4.0`
  - build(deps): bump esbuild from 0.12.24 to 0.12.25 [#374](https://github.com/kickstartDS/kickstartDS/pull/374) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump sass from 1.38.2 to 1.39.0 [#369](https://github.com/kickstartDS/kickstartDS/pull/369) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.12.23 to 0.12.24 [#361](https://github.com/kickstartDS/kickstartDS/pull/361) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump sass from 1.38.1 to 1.38.2 [#362](https://github.com/kickstartDS/kickstartDS/pull/362) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.12.22 to 0.12.23 [#355](https://github.com/kickstartDS/kickstartDS/pull/355) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump sass from 1.38.0 to 1.38.1 [#349](https://github.com/kickstartDS/kickstartDS/pull/349) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.12.21 to 0.12.22 [#347](https://github.com/kickstartDS/kickstartDS/pull/347) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.12.20 to 0.12.21 [#340](https://github.com/kickstartDS/kickstartDS/pull/340) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 3

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Jonas Ulrich ([@julrich](https://github.com/julrich))
- Lukas Mestel ([@lmestel](https://github.com/lmestel))

---

# (Tue Aug 17 2021)

#### 🚀 Enhancement

- `@kickstartds/base@1.3.0`, `@kickstartds/core@1.3.0`
  - add scroll offset token [#328](https://github.com/kickstartDS/kickstartDS/pull/328) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.3.0`
  - add caption to text-media images & videos [#326](https://github.com/kickstartDS/kickstartDS/pull/326) ([@lmestel](https://github.com/lmestel))

#### 🐛 Bug Fix

- `@kickstartds/base@1.3.0`
  - fix text-media without media [#333](https://github.com/kickstartDS/kickstartDS/pull/333) ([@lmestel](https://github.com/lmestel))
  - fix text-media video size with caption [#332](https://github.com/kickstartDS/kickstartDS/pull/332) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/content@1.3.0`
  - inherit visual headline alignment from box alignment [#329](https://github.com/kickstartDS/kickstartDS/pull/329) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.3.0`, `@kickstartds/core@1.3.0`
  - move breakpoint css token to base.css [#327](https://github.com/kickstartDS/kickstartDS/pull/327) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.3.0`, `@kickstartds/blog@1.3.0`
  - fix invalid schemas [#305](https://github.com/kickstartDS/kickstartDS/pull/305) ([@lmestel](https://github.com/lmestel))

#### 🔩 Dependency Updates

- build(deps-dev): bump vite from 2.4.4 to 2.5.0 [#335](https://github.com/kickstartDS/kickstartDS/pull/335) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump auto from 10.30.0 to 10.31.0 [#324](https://github.com/kickstartDS/kickstartDS/pull/324) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.56.0 to 2.56.2 [#317](https://github.com/kickstartDS/kickstartDS/pull/317) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump lint-staged from 11.1.1 to 11.1.2 [#308](https://github.com/kickstartDS/kickstartDS/pull/308) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @storybook/core from 6.3.6 to 6.3.7 [#313](https://github.com/kickstartDS/kickstartDS/pull/313) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- `@kickstartds/core@1.3.0`
  - build(deps): bump sass from 1.37.5 to 1.38.0 [#334](https://github.com/kickstartDS/kickstartDS/pull/334) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.12.19 to 0.12.20 [#322](https://github.com/kickstartDS/kickstartDS/pull/322) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.12.18 to 0.12.19 [#309](https://github.com/kickstartDS/kickstartDS/pull/309) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/base@1.3.0`
  - build(deps): bump react-markdown from 5.0.3 to 7.0.0 [#331](https://github.com/kickstartDS/kickstartDS/pull/331) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps-dev): bump @types/react from 17.0.17 to 17.0.18 [#330](https://github.com/kickstartDS/kickstartDS/pull/330) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps-dev): bump @types/react from 17.0.16 to 17.0.17 [#318](https://github.com/kickstartDS/kickstartDS/pull/318) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/base@1.3.0`, `@kickstartds/blog@1.3.0`, `@kickstartds/content@1.3.0`, `@kickstartds/core@1.3.0`, `@kickstartds/form@1.3.0`
  - build(deps): bump @babel/runtime from 7.14.8 to 7.15.3 [#319](https://github.com/kickstartDS/kickstartDS/pull/319) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 3

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Jonas Ulrich ([@julrich](https://github.com/julrich))
- Lukas Mestel ([@lmestel](https://github.com/lmestel))

---

# (Fri Aug 06 2021)

#### 🚀 Enhancement

- `@kickstartds/base@1.2.0`, `@kickstartds/content@1.2.0`, `@kickstartds/core@1.2.0`
  - adjust spacing tokens [#283](https://github.com/kickstartDS/kickstartDS/pull/283) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.2.0`, `@kickstartds/core@1.2.0`
  - add table component [#279](https://github.com/kickstartDS/kickstartDS/pull/279) ([@lmestel](https://github.com/lmestel))
  - add rgb color tokens for button [#270](https://github.com/kickstartDS/kickstartDS/pull/270) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.2.0`, `@kickstartds/blog@1.2.0`
  - add link tokens [#285](https://github.com/kickstartDS/kickstartDS/pull/285) ([@lmestel](https://github.com/lmestel))
  - add blog-teaser & blog-head [#224](https://github.com/kickstartDS/kickstartDS/pull/224) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.2.0`
  - add teaser padding token [#284](https://github.com/kickstartDS/kickstartDS/pull/284) ([@lmestel](https://github.com/lmestel))
  - add hide utilities to global styles [#277](https://github.com/kickstartDS/kickstartDS/pull/277) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.2.0`, `@kickstartds/blog@1.2.0`, `@kickstartds/content@1.2.0`
  - add `styleAs` prop to headline [#280](https://github.com/kickstartDS/kickstartDS/pull/280) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.2.0`, `@kickstartds/content@1.2.0`
  - add headline to visual [#163](https://github.com/kickstartDS/kickstartDS/pull/163) ([@julrich](https://github.com/julrich) [@lmestel](https://github.com/lmestel))
- `@kickstartds/core@1.2.0`
  - add rgb color tokens [#269](https://github.com/kickstartDS/kickstartDS/pull/269) ([@lmestel](https://github.com/lmestel))

#### 🐛 Bug Fix

- fix(storybook): set vite base path to '' for relative storybook assets [#211](https://github.com/kickstartDS/kickstartDS/pull/211) ([@julrich](https://github.com/julrich))
- `@kickstartds/core@1.2.0`
  - adjust spacing tokens [#300](https://github.com/kickstartDS/kickstartDS/pull/300) ([@lmestel](https://github.com/lmestel))
  - Revert "chore: trigger release" [#239](https://github.com/kickstartDS/kickstartDS/pull/239) ([@lmestel](https://github.com/lmestel))
  - chore: trigger release [#238](https://github.com/kickstartDS/kickstartDS/pull/238) ([@lmestel](https://github.com/lmestel))
  - fix: fix breakpoints parser [#216](https://github.com/kickstartDS/kickstartDS/pull/216) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.2.0`
  - set icon button size relative to font-size [#286](https://github.com/kickstartDS/kickstartDS/pull/286) ([@lmestel](https://github.com/lmestel))
  - fix iframe alignment in TextMedia [#271](https://github.com/kickstartDS/kickstartDS/pull/271) ([@lmestel](https://github.com/lmestel))
  - Ci/component tokens [#259](https://github.com/kickstartDS/kickstartDS/pull/259) ([@lmestel](https://github.com/lmestel))
  - Ci/component tokens [#258](https://github.com/kickstartDS/kickstartDS/pull/258) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.2.0`, `@kickstartds/content@1.2.0`
  - set default button variant in visual to `outline-inverted` [#299](https://github.com/kickstartDS/kickstartDS/pull/299) ([@lmestel](https://github.com/lmestel))
  - fix: bring back visual slider nav [#257](https://github.com/kickstartDS/kickstartDS/pull/257) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/content@1.2.0`
  - fix headline import [#298](https://github.com/kickstartDS/kickstartDS/pull/298) ([@lmestel](https://github.com/lmestel))
  - Hotfix/visual [#265](https://github.com/kickstartDS/kickstartDS/pull/265) ([@lmestel](https://github.com/lmestel))
  - fix visual content size with full size image [#260](https://github.com/kickstartDS/kickstartDS/pull/260) ([@lmestel](https://github.com/lmestel))

#### 🏠 Internal

- replace babel's loose option with assumptions [#291](https://github.com/kickstartDS/kickstartDS/pull/291) ([@lmestel](https://github.com/lmestel))
- update vscode extension recommendations [#266](https://github.com/kickstartDS/kickstartDS/pull/266) ([@lmestel](https://github.com/lmestel))

#### 📝 Documentation

- add storybook-addon-html addon [#246](https://github.com/kickstartDS/kickstartDS/pull/246) ([@lmestel](https://github.com/lmestel))
- add storybook darkmode addon [#292](https://github.com/kickstartDS/kickstartDS/pull/292) ([@lmestel](https://github.com/lmestel))
- docs: remove storybook-addon-performance addon [#237](https://github.com/kickstartDS/kickstartDS/pull/237) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/core@1.2.0`
  - add storybook design-tokens addon [#293](https://github.com/kickstartDS/kickstartDS/pull/293) ([@lmestel](https://github.com/lmestel))
  - storybook controls [#214](https://github.com/kickstartDS/kickstartDS/pull/214) ([@lmestel](https://github.com/lmestel))

#### 🔩 Dependency Updates

- build(deps): bump rollup from 2.55.1 to 2.56.0 [#295](https://github.com/kickstartDS/kickstartDS/pull/295) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/core from 7.14.8 to 7.15.0 [#290](https://github.com/kickstartDS/kickstartDS/pull/290) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump eslint from 7.31.0 to 7.32.0 [#275](https://github.com/kickstartDS/kickstartDS/pull/275) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/preset-env from 7.14.8 to 7.14.9 [#273](https://github.com/kickstartDS/kickstartDS/pull/273) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.55.0 to 2.55.1 [#267](https://github.com/kickstartDS/kickstartDS/pull/267) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.54.0 to 2.55.0 [#264](https://github.com/kickstartDS/kickstartDS/pull/264) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.4.3 to 2.4.4 [#261](https://github.com/kickstartDS/kickstartDS/pull/261) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @kickstartds/stylelint-config from 1.0.0 to 1.0.1 [#251](https://github.com/kickstartDS/kickstartDS/pull/251) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @kickstartds/eslint-config from 1.0.0 to 1.0.1 [#250](https://github.com/kickstartDS/kickstartDS/pull/250) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @storybook/core from 6.3.5 to 6.3.6 [#249](https://github.com/kickstartDS/kickstartDS/pull/249) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps-dev): bump @commitlint/cli from 12.1.4 to 13.1.0 [#245](https://github.com/kickstartDS/kickstartDS/pull/245) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.53.3 to 2.54.0 [#243](https://github.com/kickstartDS/kickstartDS/pull/243) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @commitlint/config-conventional from 12.1.4 to 13.1.0 [#242](https://github.com/kickstartDS/kickstartDS/pull/242) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump lint-staged from 11.1.0 to 11.1.1 [#240](https://github.com/kickstartDS/kickstartDS/pull/240) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump lint-staged from 11.0.1 to 11.1.0 [#234](https://github.com/kickstartDS/kickstartDS/pull/234) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @storybook/core from 6.3.4 to 6.3.5 [#229](https://github.com/kickstartDS/kickstartDS/pull/229) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps-dev): bump auto from 10.29.3 to 10.30.0 [#226](https://github.com/kickstartDS/kickstartDS/pull/226) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps): bump rollup from 2.53.2 to 2.53.3 [#223](https://github.com/kickstartDS/kickstartDS/pull/223) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump postcss from 8.3.5 to 8.3.6 [#222](https://github.com/kickstartDS/kickstartDS/pull/222) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump cssnano from 5.0.6 to 5.0.7 [#221](https://github.com/kickstartDS/kickstartDS/pull/221) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.4.2 to 2.4.3 [#217](https://github.com/kickstartDS/kickstartDS/pull/217) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/core from 7.14.6 to 7.14.8 [#219](https://github.com/kickstartDS/kickstartDS/pull/219) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @babel/preset-env from 7.14.7 to 7.14.8 [#220](https://github.com/kickstartDS/kickstartDS/pull/220) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump eslint from 7.30.0 to 7.31.0 [#212](https://github.com/kickstartDS/kickstartDS/pull/212) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @rollup/plugin-replace from 2.4.2 to 3.0.0 [#213](https://github.com/kickstartDS/kickstartDS/pull/213) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.53.1 to 2.53.2 [#210](https://github.com/kickstartDS/kickstartDS/pull/210) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/core@1.2.0`
  - build(deps): bump esbuild from 0.12.17 to 0.12.18 [#297](https://github.com/kickstartDS/kickstartDS/pull/297) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump sass from 1.37.2 to 1.37.5 [#282](https://github.com/kickstartDS/kickstartDS/pull/282) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump sass from 1.37.0 to 1.37.2 [#278](https://github.com/kickstartDS/kickstartDS/pull/278) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump sass from 1.36.0 to 1.37.0 [#276](https://github.com/kickstartDS/kickstartDS/pull/276) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.12.16 to 0.12.17 [#268](https://github.com/kickstartDS/kickstartDS/pull/268) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.12.15 to 0.12.16 [#252](https://github.com/kickstartDS/kickstartDS/pull/252) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump sass from 1.35.2 to 1.36.0 [#241](https://github.com/kickstartDS/kickstartDS/pull/241) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/base@1.2.0`
  - build(deps-dev): bump @types/react from 17.0.15 to 17.0.16 [#296](https://github.com/kickstartDS/kickstartDS/pull/296) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps-dev): bump @types/react from 17.0.14 to 17.0.15 [#244](https://github.com/kickstartDS/kickstartDS/pull/244) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/content@1.2.0`
  - build(deps): bump countup.js from 2.0.7 to 2.0.8 [#262](https://github.com/kickstartDS/kickstartDS/pull/262) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/base@1.2.0`, `@kickstartds/blog@1.2.0`, `@kickstartds/content@1.2.0`
  - build(deps): bump date-fns from 2.22.1 to 2.23.0 [#235](https://github.com/kickstartDS/kickstartDS/pull/235) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/base@1.2.0`, `@kickstartds/blog@1.2.0`, `@kickstartds/content@1.2.0`, `@kickstartds/core@1.2.0`, `@kickstartds/form@1.2.0`
  - build(deps): bump @babel/runtime from 7.14.6 to 7.14.8 [#218](https://github.com/kickstartDS/kickstartDS/pull/218) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 3

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Jonas Ulrich ([@julrich](https://github.com/julrich))
- Lukas Mestel ([@lmestel](https://github.com/lmestel))

---

# (Thu Jul 15 2021)

#### 🐛 Bug Fix

- `@kickstartds/base@1.1.2`, `@kickstartds/content@1.1.2`, `@kickstartds/form@1.1.3`
  - fix(schema): add some missing properties for succesful validation [#196](https://github.com/kickstartDS/kickstartDS/pull/196) ([@julrich](https://github.com/julrich))
- `@kickstartds/core@1.1.2`
  - build(deps-dev): bump vite from 2.3.8 to 2.4.1 [#178](https://github.com/kickstartDS/kickstartDS/pull/178) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@julrich](https://github.com/julrich) [@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.1.2`, `@kickstartds/blog@1.1.3`, `@kickstartds/content@1.1.2`, `@kickstartds/core@1.1.2`, `@kickstartds/form@1.1.3`
  - merge latest fixes from master [#170](https://github.com/kickstartDS/kickstartDS/pull/170) ([@julrich](https://github.com/julrich) [@lmestel](https://github.com/lmestel))

#### 🔩 Dependency Updates

- build(deps): bump autoprefixer from 10.2.6 to 10.3.1 [#207](https://github.com/kickstartDS/kickstartDS/pull/207) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump vite from 2.4.1 to 2.4.2 [#205](https://github.com/kickstartDS/kickstartDS/pull/205) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump lint-staged from 11.0.0 to 11.0.1 [#203](https://github.com/kickstartDS/kickstartDS/pull/203) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.52.8 to 2.53.1 [#206](https://github.com/kickstartDS/kickstartDS/pull/206) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump babel-plugin-transform-jsx-to-htm from 2.1.0 to 2.2.0 [#197](https://github.com/kickstartDS/kickstartDS/pull/197) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @storybook/core from 6.3.2 to 6.3.3 [#181](https://github.com/kickstartDS/kickstartDS/pull/181) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @storybook/addon-a11y from 6.3.2 to 6.3.3 [#185](https://github.com/kickstartDS/kickstartDS/pull/185) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump rollup from 2.52.7 to 2.52.8 [#182](https://github.com/kickstartDS/kickstartDS/pull/182) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @storybook/cli from 6.3.2 to 6.3.3 [#183](https://github.com/kickstartDS/kickstartDS/pull/183) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @types/react-dom from 17.0.8 to 17.0.9 [#187](https://github.com/kickstartDS/kickstartDS/pull/187) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @storybook/addon-essentials from 6.3.2 to 6.3.3 [#188](https://github.com/kickstartDS/kickstartDS/pull/188) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump husky from 7.0.0 to 7.0.1 [#180](https://github.com/kickstartDS/kickstartDS/pull/180) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @kickstartds/stylelint-config from 1.0.0-alpha.1 to 1.0.0 [#173](https://github.com/kickstartDS/kickstartDS/pull/173) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @kickstartds/eslint-config from 1.0.0-alpha.3 to 1.0.0 [#172](https://github.com/kickstartDS/kickstartDS/pull/172) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump eslint from 7.29.0 to 7.30.0 [#171](https://github.com/kickstartDS/kickstartDS/pull/171) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/base@1.1.2`
  - build(deps): bump simplebar from 5.3.4 to 5.3.5 [#208](https://github.com/kickstartDS/kickstartDS/pull/208) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps-dev): bump @types/react from 17.0.13 to 17.0.14 [#186](https://github.com/kickstartDS/kickstartDS/pull/186) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/core@1.1.2`
  - build(deps): bump htm from 3.0.4 to 3.1.0 [#204](https://github.com/kickstartDS/kickstartDS/pull/204) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump sass from 1.35.1 to 1.35.2 [#184](https://github.com/kickstartDS/kickstartDS/pull/184) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.12.14 to 0.12.15 [#179](https://github.com/kickstartDS/kickstartDS/pull/179) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 3

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Jonas Ulrich ([@julrich](https://github.com/julrich))
- Lukas Mestel ([@lmestel](https://github.com/lmestel))

---

# (Sun Jul 04 2021)

#### 🐛 Bug Fix

- `@kickstartds/blog@1.1.2`, `@kickstartds/form@1.1.2`
  - fix(schema): add missing props to select form and blog component schemas [#169](https://github.com/kickstartDS/kickstartDS/pull/169) ([@julrich](https://github.com/julrich))

#### Authors: 1

- Jonas Ulrich ([@julrich](https://github.com/julrich))

---

# (Sun Jul 04 2021)

#### ⚠️ Pushed to `master`

- ci(circleci): add another build stage ([@julrich](https://github.com/julrich))
- `@kickstartds/base@1.1.1`, `@kickstartds/blog@1.1.1`, `@kickstartds/content@1.1.1`, `@kickstartds/core@1.1.1`, `@kickstartds/form@1.1.1`
  - chore(documentation): trigger another release for packages ([@julrich](https://github.com/julrich))

#### Authors: 1

- Jonas Ulrich ([@julrich](https://github.com/julrich))

---

# (Sun Jul 04 2021)

#### 🚀 Enhancement

- `@kickstartds/base@1.1.0`, `@kickstartds/blog@1.1.0`, `@kickstartds/content@1.1.0`, `@kickstartds/core@1.1.0`, `@kickstartds/form@1.1.0`
  - feat(documentation): trigger a release to fix versioning [#166](https://github.com/kickstartDS/kickstartDS/pull/166) ([@julrich](https://github.com/julrich))

#### 🐛 Bug Fix

- `@kickstartds/base@1.1.0`, `@kickstartds/blog@1.1.0`, `@kickstartds/content@1.1.0`, `@kickstartds/core@1.1.0`, `@kickstartds/form@1.1.0`
  - fix(documentation): add updated CHANGELOG.md to release [#164](https://github.com/kickstartDS/kickstartDS/pull/164) ([@julrich](https://github.com/julrich))

#### ⚠️ Pushed to `master`

- ci(circleci): change dependencies ([@julrich](https://github.com/julrich))

#### Authors: 1

- Jonas Ulrich ([@julrich](https://github.com/julrich))

---

# (Fri Jul 02 2021)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Lukas Mestel ([@lmestel](https://github.com/lmestel))

:heart: Jonas Ulrich ([@julrich](https://github.com/julrich))

#### 🐛 Bug Fix

- Feature/storybook component tokens addon [#159](https://github.com/kickstartDS/kickstartDS/pull/159) ([@lmestel](https://github.com/lmestel))
- build: remove config packages [#160](https://github.com/kickstartDS/kickstartDS/pull/160) ([@lmestel](https://github.com/lmestel))
- Build/circleci config [#157](https://github.com/kickstartDS/kickstartDS/pull/157) ([@lmestel](https://github.com/lmestel))
- chore: remove `netlify-cms` package [#147](https://github.com/kickstartDS/kickstartDS/pull/147) ([@lmestel](https://github.com/lmestel))
- build: update storybook [#124](https://github.com/kickstartDS/kickstartDS/pull/124) ([@lmestel](https://github.com/lmestel))
- feat: export `Template` in each story [#107](https://github.com/kickstartDS/kickstartDS/pull/107) ([@lmestel](https://github.com/lmestel))
- build: exit on error [#96](https://github.com/kickstartDS/kickstartDS/pull/96) ([@lmestel](https://github.com/lmestel))
- feature/storybook performance [#93](https://github.com/kickstartDS/kickstartDS/pull/93) ([@julrich](https://github.com/julrich))
- fix(a11y): fix and re-add accessibility addon [#92](https://github.com/kickstartDS/kickstartDS/pull/92) ([@julrich](https://github.com/julrich))
- chore: update postcss [#62](https://github.com/kickstartDS/kickstartDS/pull/62) ([@lmestel](https://github.com/lmestel))
- build: restrict vite version [#52](https://github.com/kickstartDS/kickstartDS/pull/52) ([@lmestel](https://github.com/lmestel))
- Hotfix/chromatic [#36](https://github.com/kickstartDS/kickstartDS/pull/36) ([@lmestel](https://github.com/lmestel))
- docs: simplify storybook setup [#31](https://github.com/kickstartDS/kickstartDS/pull/31) ([@lmestel](https://github.com/lmestel))
- fix: fix chromatic build [#28](https://github.com/kickstartDS/kickstartDS/pull/28) ([@lmestel](https://github.com/lmestel))
- Feature/chromatic monorepo [#27](https://github.com/kickstartDS/kickstartDS/pull/27) ([@julrich](https://github.com/julrich))
- feat: use vite as a storybook builder [#15](https://github.com/kickstartDS/kickstartDS/pull/15) ([@julrich](https://github.com/julrich))
- Hotfix/storybook [#13](https://github.com/kickstartDS/kickstartDS/pull/13) ([@lmestel](https://github.com/lmestel))
- fix(storybook): fix markdown story generation [#10](https://github.com/kickstartDS/kickstartDS/pull/10) ([@lmestel](https://github.com/lmestel))
- chore(storybook): replace nunjucks with js template literals [#9](https://github.com/kickstartDS/kickstartDS/pull/9) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/core@1.0.0`
  - fix: bundle only kickstartDS modules [#161](https://github.com/kickstartDS/kickstartDS/pull/161) ([@lmestel](https://github.com/lmestel))
  - fix: escape media-queries in breakpoints token [#150](https://github.com/kickstartDS/kickstartDS/pull/150) ([@lmestel](https://github.com/lmestel))
  - fix: fix visual fullscreen variant [#68](https://github.com/kickstartDS/kickstartDS/pull/68) ([@lmestel](https://github.com/lmestel))
  - build: add final bundle to lib [#39](https://github.com/kickstartDS/kickstartDS/pull/39) ([@lmestel](https://github.com/lmestel))
  - fix: fix storybook arg packing [#25](https://github.com/kickstartDS/kickstartDS/pull/25) ([@lmestel](https://github.com/lmestel))
  - feat: move storybook helpers to core [#24](https://github.com/kickstartDS/kickstartDS/pull/24) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.0.0`, `@kickstartds/core@1.0.0`
  - Hotfix/ssr [#131](https://github.com/kickstartDS/kickstartDS/pull/131) ([@lmestel](https://github.com/lmestel))
  - Feature/faq [#32](https://github.com/kickstartDS/kickstartDS/pull/32) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.0.0`
  - fix(schema): minor schema updates [#129](https://github.com/kickstartDS/kickstartDS/pull/129) ([@julrich](https://github.com/julrich) [@lmestel](https://github.com/lmestel))
  - fix: don't pass `enabled` prop to link-button in content-box [#106](https://github.com/kickstartDS/kickstartDS/pull/106) ([@lmestel](https://github.com/lmestel))
  - Feature/tokens [#105](https://github.com/kickstartDS/kickstartDS/pull/105) ([@lmestel](https://github.com/lmestel))
  - feat(divider): add variant to divider for styling purposes [#83](https://github.com/kickstartDS/kickstartDS/pull/83) ([@julrich](https://github.com/julrich) [@lmestel](https://github.com/lmestel))
  - fix: fix section spacing [#80](https://github.com/kickstartDS/kickstartDS/pull/80) ([@lmestel](https://github.com/lmestel))
  - Feature/upgrade vite storybook [#66](https://github.com/kickstartDS/kickstartDS/pull/66) ([@julrich](https://github.com/julrich))
  - feat: add teaser-row component [#59](https://github.com/kickstartDS/kickstartDS/pull/59) ([@lmestel](https://github.com/lmestel))
  - fix: fix content box image position [#50](https://github.com/kickstartDS/kickstartDS/pull/50) ([@lmestel](https://github.com/lmestel))
  - feat: add section mode "list" [#38](https://github.com/kickstartDS/kickstartDS/pull/38) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.0.0`, `@kickstartds/blog@1.0.0`, `@kickstartds/content@1.0.0`, `@kickstartds/core@1.0.0`, `@kickstartds/form@1.0.0`
  - Feature/auto [#119](https://github.com/kickstartDS/kickstartDS/pull/119) ([@lmestel](https://github.com/lmestel) [@julrich](https://github.com/julrich))
  - Feature/yarn [#111](https://github.com/kickstartDS/kickstartDS/pull/111) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.0.0`, `@kickstartds/content@1.0.0`
  - fix: fix rich-text token names [#112](https://github.com/kickstartDS/kickstartDS/pull/112) ([@lmestel](https://github.com/lmestel))
  - Hotfix/visual & icon [#95](https://github.com/kickstartDS/kickstartDS/pull/95) ([@lmestel](https://github.com/lmestel))
  - feature/schema picture consistency [#84](https://github.com/kickstartDS/kickstartDS/pull/84) ([@julrich](https://github.com/julrich) [@lmestel](https://github.com/lmestel))
  - Hotfix/button size [#67](https://github.com/kickstartDS/kickstartDS/pull/67) ([@lmestel](https://github.com/lmestel))
  - feat: add vars for slider [#64](https://github.com/kickstartDS/kickstartDS/pull/64) ([@lmestel](https://github.com/lmestel))
  - Feature/render props [#63](https://github.com/kickstartDS/kickstartDS/pull/63) ([@lmestel](https://github.com/lmestel))
  - feat: pass on html attributes to components [#54](https://github.com/kickstartDS/kickstartDS/pull/54) ([@lmestel](https://github.com/lmestel))
  - feat: add countUp component [#49](https://github.com/kickstartDS/kickstartDS/pull/49) ([@lmestel](https://github.com/lmestel))
  - feat: add render props [#47](https://github.com/kickstartDS/kickstartDS/pull/47) ([@lmestel](https://github.com/lmestel))
  - Feature/collapsible box [#40](https://github.com/kickstartDS/kickstartDS/pull/40) ([@lmestel](https://github.com/lmestel))
  - fix: remove/rename conflicting component props [#23](https://github.com/kickstartDS/kickstartDS/pull/23) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.0.0`, `@kickstartds/blog@1.0.0`, `@kickstartds/content@1.0.0`, `@kickstartds/core@1.0.0`
  - build: add stories to lib folder [#102](https://github.com/kickstartDS/kickstartDS/pull/102) ([@lmestel](https://github.com/lmestel))
  - Feature/netlify cms support [#41](https://github.com/kickstartDS/kickstartDS/pull/41) ([@julrich](https://github.com/julrich) [@lmestel](https://github.com/lmestel))
  - Feature/style refactor [#22](https://github.com/kickstartDS/kickstartDS/pull/22) ([@lmestel](https://github.com/lmestel))
  - build: remove core-js polyfills [#21](https://github.com/kickstartDS/kickstartDS/pull/21) ([@lmestel](https://github.com/lmestel))
  - Feature/watch task [#19](https://github.com/kickstartDS/kickstartDS/pull/19) ([@lmestel](https://github.com/lmestel))
  - Feature/design tokens [#14](https://github.com/kickstartDS/kickstartDS/pull/14) ([@lmestel](https://github.com/lmestel))
  - Lib [#1](https://github.com/kickstartDS/kickstartDS/pull/1) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/content@1.0.0`
  - feat: add duration variation to count-up [#78](https://github.com/kickstartDS/kickstartDS/pull/78) ([@lmestel](https://github.com/lmestel))
  - feat: add contact component [#60](https://github.com/kickstartDS/kickstartDS/pull/60) ([@lmestel](https://github.com/lmestel))
  - feat: add logo-tiles component [#58](https://github.com/kickstartDS/kickstartDS/pull/58) ([@lmestel](https://github.com/lmestel))
  - fix: increase countUp scroll threshold [#51](https://github.com/kickstartDS/kickstartDS/pull/51) ([@lmestel](https://github.com/lmestel))
  - Feature/visual link [#26](https://github.com/kickstartDS/kickstartDS/pull/26) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.0.0`, `@kickstartds/form@1.0.0`
  - Feature/form fields [#69](https://github.com/kickstartDS/kickstartDS/pull/69) ([@lmestel](https://github.com/lmestel))
  - Feature/form fields [#65](https://github.com/kickstartDS/kickstartDS/pull/65) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.0.0`, `@kickstartds/content@1.0.0`, `@kickstartds/core@1.0.0`
  - Feature/count up [#75](https://github.com/kickstartDS/kickstartDS/pull/75) ([@lmestel](https://github.com/lmestel))
  - Feature/collapsible box [#37](https://github.com/kickstartDS/kickstartDS/pull/37) ([@lmestel](https://github.com/lmestel))
  - Feature/render props [#34](https://github.com/kickstartDS/kickstartDS/pull/34) ([@lmestel](https://github.com/lmestel))
  - Feature/ssr [#29](https://github.com/kickstartDS/kickstartDS/pull/29) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.0.0`, `@kickstartds/blog@1.0.0`, `@kickstartds/content@1.0.0`
  - refactor: update css reset [#48](https://github.com/kickstartDS/kickstartDS/pull/48) ([@lmestel](https://github.com/lmestel))
  - Hotfix/spacing & alignment [#46](https://github.com/kickstartDS/kickstartDS/pull/46) ([@lmestel](https://github.com/lmestel))
  - Hotfix/link button types [#8](https://github.com/kickstartDS/kickstartDS/pull/8) ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.0.0`, `@kickstartds/blog@1.0.0`, `@kickstartds/core@1.0.0`
  - Feature/section [#35](https://github.com/kickstartDS/kickstartDS/pull/35) ([@lmestel](https://github.com/lmestel))

#### ⚠️ Pushed to `master`

- build: try to fix dependabot ([@lmestel](https://github.com/lmestel))
- build: update storybook ([@lmestel](https://github.com/lmestel))
- build: update dev dependencies ([@lmestel](https://github.com/lmestel))
- chore: update dependencies ([@lmestel](https://github.com/lmestel))
- fix(storybook): update doc block import ([@julrich](https://github.com/julrich))
- chore(config): sort npm scripts in package.json ([@julrich](https://github.com/julrich))
- fix(dependencies): explicitly update chromatic ([@julrich](https://github.com/julrich))
- fix(dependencies): update fs-extra to 10.0.0 ([@julrich](https://github.com/julrich))
- chore: fix linter ([@lmestel](https://github.com/lmestel))
- fix(dependencies): fix dependencies after dependabot ([@julrich](https://github.com/julrich))
- chore(storybook): more cleanup ([@julrich](https://github.com/julrich))
- fix(dependencies): update eslint to current version ([@julrich](https://github.com/julrich))
- fix(dependencies): update dependencies ([@julrich](https://github.com/julrich))
- chore: trigger another release ([@julrich](https://github.com/julrich))
- chore: add context to circle ci workflow ([@julrich](https://github.com/julrich))
- chore: add circle ci configuration ([@julrich](https://github.com/julrich))
- chore: update dependencies ([@julrich](https://github.com/julrich))
- chore: update husky to husky 6 ([@julrich](https://github.com/julrich))
- fix: remove Docker from project ([@julrich](https://github.com/julrich))
- fix: update dependencies ([@julrich](https://github.com/julrich))
- feat: add schema to GraphQL converter stub ([@julrich](https://github.com/julrich))
- feat: initial commit ([@julrich](https://github.com/julrich))
- `@kickstartds/base@1.0.0`
  - build: update dependencies ([@lmestel](https://github.com/lmestel))
  - fix(schema): add missing object types to button schemas ([@julrich](https://github.com/julrich))
  - fix(schema): fix typo in icon definitions name ([@julrich](https://github.com/julrich))
  - fix(schema): remove unused schemas ([@julrich](https://github.com/julrich))
  - feat: add chromatic ([@julrich](https://github.com/julrich))
- `@kickstartds/base@1.0.0`, `@kickstartds/blog@1.0.0`, `@kickstartds/content@1.0.0`, `@kickstartds/form@1.0.0`
  - chore: new release ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.0.0`, `@kickstartds/blog@1.0.0`, `@kickstartds/content@1.0.0`, `@kickstartds/core@1.0.0`, `@kickstartds/form@1.0.0`
  - chore: new release ([@lmestel](https://github.com/lmestel))
- `@kickstartds/content@1.0.0`
  - fix(visual): was missing type object in allOf of box link ([@julrich](https://github.com/julrich))
  - chore: new release ([@lmestel](https://github.com/lmestel))
  - fix: fix count-up duration calculation ([@lmestel](https://github.com/lmestel))
  - fix: fix visual schema ([@lmestel](https://github.com/lmestel))
  - fix: fix visual media position ([@lmestel](https://github.com/lmestel))
- `@kickstartds/form@1.0.0`
  - chore: update form version ([@lmestel](https://github.com/lmestel))
- `@kickstartds/base@1.0.0`, `@kickstartds/blog@1.0.0`, `@kickstartds/content@1.0.0`
  - Merge branch 'master' of github.com:kickstartDS/kickstartDS ([@julrich](https://github.com/julrich))
  - chore: new release ([@lmestel](https://github.com/lmestel))
  - chore: new release ([@julrich](https://github.com/julrich))
  - fix: update storybook module urls ([@julrich](https://github.com/julrich))
- `@kickstartds/base@1.0.0`, `@kickstartds/content@1.0.0`
  - fix(schema): minor schema fixes ([@julrich](https://github.com/julrich))
- `@kickstartds/base@1.0.0`, `@kickstartds/blog@1.0.0`, `@kickstartds/content@1.0.0`, `@kickstartds/core@1.0.0`
  - chore: new release ([@lmestel](https://github.com/lmestel))
  - chore: new release ([@julrich](https://github.com/julrich))
- `@kickstartds/core@1.0.0`
  - docs: simplify stories, add unpack decorator ([@lmestel](https://github.com/lmestel))

#### 🔩 Dependency Updates

- build(deps): update storybook [#156](https://github.com/kickstartDS/kickstartDS/pull/156) ([@lmestel](https://github.com/lmestel))
- build(deps): bump rollup from 2.52.6 to 2.52.7 [#154](https://github.com/kickstartDS/kickstartDS/pull/154) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build: remove unused dependencies [#148](https://github.com/kickstartDS/kickstartDS/pull/148) ([@lmestel](https://github.com/lmestel))
- build(deps-dev): bump husky from 6.0.0 to 7.0.0 [#144](https://github.com/kickstartDS/kickstartDS/pull/144) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps): bump rollup from 2.52.3 to 2.52.6 [#142](https://github.com/kickstartDS/kickstartDS/pull/142) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @typescript-eslint/parser from 4.28.0 to 4.28.1 [#140](https://github.com/kickstartDS/kickstartDS/pull/140) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump json-schema-faker from 0.5.0-rcv.34 to 0.5.0-rcv.35 [#138](https://github.com/kickstartDS/kickstartDS/pull/138) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump @typescript-eslint/eslint-plugin from 4.28.0 to 4.28.1 [#134](https://github.com/kickstartDS/kickstartDS/pull/134) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @storybook/cli from 6.3.1 to 6.3.2 [#132](https://github.com/kickstartDS/kickstartDS/pull/132) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps-dev): bump typescript from 4.3.4 to 4.3.5 [#130](https://github.com/kickstartDS/kickstartDS/pull/130) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump prettier from 2.3.1 to 2.3.2 [#122](https://github.com/kickstartDS/kickstartDS/pull/122) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps): bump fast-glob from 3.2.5 to 3.2.6 [#123](https://github.com/kickstartDS/kickstartDS/pull/123) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps): bump postcss from 7.0.35 to 7.0.36 [#108](https://github.com/kickstartDS/kickstartDS/pull/108) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps-dev): bump typescript from 4.3.3 to 4.3.4 [#109](https://github.com/kickstartDS/kickstartDS/pull/109) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps): bump execa from 5.0.1 to 5.1.0 [#82](https://github.com/kickstartDS/kickstartDS/pull/82) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps): bump execa from 5.0.0 to 5.0.1 [#79](https://github.com/kickstartDS/kickstartDS/pull/79) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps-dev): bump typescript from 4.2.4 to 4.3.2 [#76](https://github.com/kickstartDS/kickstartDS/pull/76) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps-dev): bump @commitlint/config-conventional from 12.1.1 to 12.1.4 [#56](https://github.com/kickstartDS/kickstartDS/pull/56) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump @commitlint/cli from 12.1.1 to 12.1.4 [#55](https://github.com/kickstartDS/kickstartDS/pull/55) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump lint-staged from 10.5.4 to 11.0.0 [#43](https://github.com/kickstartDS/kickstartDS/pull/43) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))
- build(deps): bump fs-extra from 9.1.0 to 10.0.0 [#33](https://github.com/kickstartDS/kickstartDS/pull/33) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump stylelint from 13.13.0 to 13.13.1 [#30](https://github.com/kickstartDS/kickstartDS/pull/30) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump eslint from 7.24.0 to 7.25.0 [#20](https://github.com/kickstartDS/kickstartDS/pull/20) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump stylelint from 13.12.0 to 13.13.0 [#17](https://github.com/kickstartDS/kickstartDS/pull/17) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@julrich](https://github.com/julrich))
- build(deps-dev): bump eslint from 7.24.0 to 7.25.0 [#18](https://github.com/kickstartDS/kickstartDS/pull/18) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps): bump execa from 3.4.0 to 5.0.0 [#4](https://github.com/kickstartDS/kickstartDS/pull/4) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- build(deps-dev): bump husky from 4.3.8 to 6.0.0 [#5](https://github.com/kickstartDS/kickstartDS/pull/5) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Create Dependabot config file [#3](https://github.com/kickstartDS/kickstartDS/pull/3) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- `@kickstartds/core@1.0.0`
  - build(deps): bump esbuild from 0.12.13 to 0.12.14 [#151](https://github.com/kickstartDS/kickstartDS/pull/151) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - build(deps): bump esbuild from 0.11.23 to 0.12.13 [#137](https://github.com/kickstartDS/kickstartDS/pull/137) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/base@1.0.0`
  - build(deps-dev): bump @types/react from 17.0.11 to 17.0.13 [#143](https://github.com/kickstartDS/kickstartDS/pull/143) ([@dependabot[bot]](https://github.com/dependabot[bot]))
  - Build/revert dependency updates [#146](https://github.com/kickstartDS/kickstartDS/pull/146) ([@lmestel](https://github.com/lmestel))
  - build(deps): bump react-markdown from 5.0.3 to 6.0.2 [#145](https://github.com/kickstartDS/kickstartDS/pull/145) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- `@kickstartds/base@1.0.0`, `@kickstartds/content@1.0.0`, `@kickstartds/core@1.0.0`
  - build(deps-dev): bump eslint from 7.26.0 to 7.27.0 [#70](https://github.com/kickstartDS/kickstartDS/pull/70) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@lmestel](https://github.com/lmestel))

#### Authors: 4

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- [@dependabot[bot]](https://github.com/dependabot[bot])
- Jonas Ulrich ([@julrich](https://github.com/julrich))
- Lukas Mestel ([@lmestel](https://github.com/lmestel))
