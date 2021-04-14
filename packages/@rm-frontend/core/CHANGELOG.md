# Changelog

<a name="@rm-frontend/core-v3.0.0"></a>
# [@rm-frontend/core-v3.0.0](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/compare/diff?targetBranch=refs%2Ftags%2Fcore@2.2.0&sourceBranch=refs%2Ftags%2Fcore@3.0.0) (2021-01-26)


### Features

* **core:** move handlebars try helper ([1f5a638](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/1f5a638))


### BREAKING CHANGES

* **core:** the handlebars `try` helper now lives in handlebars-global-helper folder

<a name="@rm-frontend/core-v2.2.0"></a>
# [@rm-frontend/core-v2.2.0](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/compare/diff?targetBranch=refs%2Ftags%2Fcore@2.1.0&sourceBranch=refs%2Ftags%2Fcore@2.2.0) (2021-01-17)


### Features

* **storybook:** get handlebars templates up and running in client ([994f707](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/994f707))

<a name="@rm-frontend/core-v2.1.0"></a>
# [@rm-frontend/core-v2.1.0](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/compare/diff?targetBranch=refs%2Ftags%2Fcore@2.0.1&sourceBranch=refs%2Ftags%2Fcore@2.1.0) (2020-12-18)


### Features

* **core:** enable lazy component loading ([da24990](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/da24990))

<a name="@rm-frontend/core-v2.0.1"></a>
# [@rm-frontend/core-v2.0.1](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/compare/diff?targetBranch=refs%2Ftags%2Fcore@2.0.0&sourceBranch=refs%2Ftags%2Fcore@2.0.1) (2020-12-10)


### Bug Fixes

* don't access global scope ([04c649d](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/04c649d))

<a name="@rm-frontend/core-v2.0.0"></a>
# [@rm-frontend/core-v2.0.0](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/compare/diff?targetBranch=refs%2Ftags%2Fcore@1.2.1@latest&sourceBranch=refs%2Ftags%2Fcore@2.0.0@alpha) (2020-03-18)


### Features

* **core:** replace PubSub with custom rm.radio module ([55d15fd](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/55d15fd))


### BREAKING CHANGES

* **core:** * remove all PubSub dependencies from module's package.json (except core module)
* remove all PubSub imports
* replace `PubSub.subscribe` with `rm.radio.on`
* replace `PubSub.unsubscribe` with `rm.radio.off`
* replace `PubSub.publish` with `rm.radio.emit`

<a name="@rm-frontend/core-v1.2.1"></a>
# [@rm-frontend/core-v1.2.1](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/compare/diff?targetBranch=refs%2Ftags%2Fcore@1.2.0@latest&sourceBranch=refs%2Ftags%2Fcore@1.2.1@latest) (2020-02-11)


### Bug Fixes

* **base,core:** validate forms even they are not components ([ed55bae](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/ed55bae))

<a name="@rm-frontend/core-v1.2.0"></a>
# [@rm-frontend/core-v1.2.0](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/compare/diff?targetBranch=refs%2Ftags%2Fcore@1.1.1@latest&sourceBranch=refs%2Ftags%2Fcore@1.2.0@next) (2020-02-10)


### Features

* make components more independent ([5a4acc0](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/5a4acc0))

<a name="@rm-frontend/core-v1.1.1"></a>
# [@rm-frontend/core-v1.1.1](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/compare/diff?targetBranch=refs%2Ftags%2Fcore@1.1.0@latest&sourceBranch=refs%2Ftags%2Fcore@1.1.1@latest) (2019-11-19)


### Bug Fixes

* **core:** fix handlebars merge helper ([ebcdfe2](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/ebcdfe2))

<a name="@rm-frontend/core-v1.1.0"></a>
# [@rm-frontend/core-v1.1.0](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/compare/diff?targetBranch=refs%2Ftags%2Fcore@1.0.0@latest&sourceBranch=refs%2Ftags%2Fcore@1.1.0@next) (2019-11-08)


### Features

* **base,build-tools,core:** access root data in templates ([54a46ac](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/54a46ac))
* **core:** add object- and array-helper ([0a9ccb0](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/0a9ccb0))

<a name="@rm-frontend/core-v1.0.0"></a>
# @rm-frontend/core-v1.0.0 (2019-09-26)


### Features

* BWTY-259 improve microdata ([f0b3bdb](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/f0b3bdb))
* **core:** BWTY-259 add new handlebar helper to replace substring ([ce73fa4](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/ce73fa4))
* access body element after DOMContentLoaded ([258f26e](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/258f26e))
* **base:** make header variant configurable ([a1f4b14](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/a1f4b14))
* **core:** FRONT-7 add optional performance info about component loading ([155e554](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/155e554))
* ignore components from deactivated modules ([d039b77](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/d039b77))
* **core:** add attributes observation in component loader ([72313f7](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/72313f7))
* add core module ([cf1764c](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/cf1764c))
* move some templates to pages ([e4130bf](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/e4130bf))
* **core:** improve component loader ([1e46f92](https://bitbucket.ruhmesmeile.tools/projects/front/repos/rm-frontend/commits/1e46f92))
