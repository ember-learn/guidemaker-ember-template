'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'dummy',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    'ember-meta': {
      description: 'Ember Guidemaker Template',
    },

    guidemaker: {
      title: 'Ember Guidemaker Template',
      sourceRepo: 'https://github.com/ember-learn/guidemaker-ember-template',
    },

    algolia: {
      algoliaId: 'FAKEKEY',
      algoliaKey: 'alsofake',
      indexName: 'ember-guides',
    },

    'ember-showdown-shiki': {
      languages: [
        'bash',
        'css',
        'http',
        'javascript',
        'json',
        'json5',
        'ruby',
        'scss',
        'yaml',
        'typescript',
        'glimmer-js',
        'glimmer-ts',
        'handlebars',
      ],
    },

    //     // you can comment out these lines if you want to test the info banner implementation
    //     survey: {
    //       content: `Take the [Ember Community Survey](https://emberjs.com/ember-community-survey-2019/)`
    //     },

    //     infoBanner: {
    //       content: `Thanks for taking the Octane preview for a test drive! Visit
    // <a href="https://emberjs.com" target="_blank" rel="noopener">thingy</a>
    // for more info and ways you can help out.
    // These preview guides URLs are subject to change, so point your bookmarks at that landing page.
    // If you are looking for the latest stable release of Ember, please instead visit
    // <a href="https://guides.emberjs.com" target="_blank" rel="noopener">guides.emberjs.com</a>.`
    //     },

    runPercyTest: process.env.RUN_PERCY_TESTS,
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;

    ENV['ember-tether'] = {
      bodyElementId: 'ember-testing',
    };
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
