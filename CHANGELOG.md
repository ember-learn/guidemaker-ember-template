# Changelog

## Release (2024-05-02)

guidemaker-ember-template 4.0.0 (major)

#### :boom: Breaking Change
* `guidemaker-ember-template`, `test-app`
  * [#188](https://github.com/ember-learn/guidemaker-ember-template/pull/188) Convert to a V2 addon and drop support for Ember < 3.28 ([@mansona](https://github.com/mansona))
* Other
  * [#168](https://github.com/ember-learn/guidemaker-ember-template/pull/168) feat: Use `ember-showdown-shikiji` for syntax highlighting ([@IgnaceMaes](https://github.com/IgnaceMaes))

#### :rocket: Enhancement
* [#186](https://github.com/ember-learn/guidemaker-ember-template/pull/186) feat: highlight active title in "On This Page" ([@IgnaceMaes](https://github.com/IgnaceMaes))
* [#184](https://github.com/ember-learn/guidemaker-ember-template/pull/184) style: make on-this-page sticky ([@IgnaceMaes](https://github.com/IgnaceMaes))
* [#180](https://github.com/ember-learn/guidemaker-ember-template/pull/180) style: update "on this page" to only show headers up until level 3 and indent ([@IgnaceMaes](https://github.com/IgnaceMaes))
* [#173](https://github.com/ember-learn/guidemaker-ember-template/pull/173) style: inline pen svg and make color gray ([@IgnaceMaes](https://github.com/IgnaceMaes))
* [#174](https://github.com/ember-learn/guidemaker-ember-template/pull/174) style: on-this-page tweaks ([@IgnaceMaes](https://github.com/IgnaceMaes))
* [#170](https://github.com/ember-learn/guidemaker-ember-template/pull/170) deps: upgrade to ember-showdown-shiki ([@IgnaceMaes](https://github.com/IgnaceMaes))

#### :bug: Bug Fix
* [#171](https://github.com/ember-learn/guidemaker-ember-template/pull/171) Sidebar weirdness (#486) ([@lukasnys](https://github.com/lukasnys))
* [#166](https://github.com/ember-learn/guidemaker-ember-template/pull/166) Use Sanitize-HTML to not render input fields in our search response ([@MinThaMie](https://github.com/MinThaMie))

#### :house: Internal
* [#175](https://github.com/ember-learn/guidemaker-ember-template/pull/175) start using release-plan ([@mansona](https://github.com/mansona))

#### Committers: 4
- Anne-Greeth Schot-van Herwijnen ([@MinThaMie](https://github.com/MinThaMie))
- Chris Manson ([@mansona](https://github.com/mansona))
- Ignace Maes ([@IgnaceMaes](https://github.com/IgnaceMaes))
- Lukas Nys ([@lukasnys](https://github.com/lukasnys))


## v3.5.0 (2023-09-30)

#### :rocket: Enhancement
* [#164](https://github.com/ember-learn/guidemaker-ember-template/pull/164) Bumped e-showdown-prism dep to 4.4 ([@lupestro](https://github.com/lupestro))

#### Committers: 1
- Ralph Mack ([@lupestro](https://github.com/lupestro))

2.0.0 / 2021-05-06
==================

  * Add support for "main" branches in edit URLs #77 from @jenweber
  * BREAKING: Fix CI for ember-release and update minimum Ember version #78 from @mansona
  * Migrated from Travis to GitHub Actions #57 from @ijlee2
  * Updated links to the Ember Guides for filing an issue #49 from @ijlee2
  * Fix typo in README #44 from @amyrlam
  * don't include removal diff in copy-paste code, fix tests #32 from @jenweber
  * Fill in README #34 from @jenweber
  * [Fix] Basic Markdown path link #28 from @safirelauene

This Template now requires Ember 3.13 as a minimum version in the host app.

1.2.0 / 2019-05-06
==================

  * Update dependencies and fix template lint #19 from @mansona
  * Removing the need for jQuery #19 from @mansona

1.1.0 / 2019-03-27
==================

  * add LTS signifier to version dropdown #11 from @locks

1.0.0 / 2019-03-14
==================

  * working local development #8 from @mansona
  * abstract the survey component to be `info-banner` instead, taking a config object named `infoBanner` #12 from @jenweber
  * make the infoBanner use markdown for the text and links #12 from @mansona

0.7.1 / 2019-02-20
==================

  * fixing survey link for mobiles #7 from @mansona

0.7.0 / 2019-02-20
==================

  * adding link for the community survey #6 from @mansona

0.6.0 / 2019-01-22
==================

  * implementing "no search results" feature https://github.com/ember-learn/guides-app/pull/342 from @cah-danmonroe

0.5.1 / 2019-01-21
==================

  * updating ember-concurrency
  * fixing power-select version dropdown

0.5.0 / 2018-11-26
==================

  * Making edit button link configurable #3 from @mansona

0.4.0 / 2018-11-08
==================

  * moving controllers, helpers, initializers, models, and routes to core from @mansona

0.3.0 / 2018-11-07
==================

  * moving ember-meta implementation into guidemaker core from @mansona
  * removing unused blueprint

0.2.0 / 2018-11-02
==================

  * Pulling down updates and re-syncing with ember-learn/guides-app from @mansona

0.1.0 / 2018-11-02
==================

  * Adding search components and updating ember-styleguide #2 from @mansona
