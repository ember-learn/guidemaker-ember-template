import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import percyTests from 'guidemaker/percy-tests';

module('Acceptance | visual regressions', function(hooks) {
  setupApplicationTest(hooks);

  percyTests(test);
});
