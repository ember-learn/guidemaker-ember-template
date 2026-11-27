'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    autoImport: {
      watchDependencies: ['guidemaker-ember-template'],
      webpack: {
        module: {
          // ember-styleguide's CSS refers to its images with relative URLs.
          rules: [
            { test: /\.(svg|png|jpe?g|webp|woff2?)$/, type: 'asset/resource' },
          ],
        },
      },
    },
    fingerprint: {
      extensions: ['js', 'css', 'map'],
    },
  });

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app);
};
