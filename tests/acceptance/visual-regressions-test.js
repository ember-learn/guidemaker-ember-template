import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import percyTests from 'guidemaker/percy-tests';
import config from '../../config/environment';

module('Acceptance | visual regressions', function(hooks) {
  setupApplicationTest(hooks);

  if(config.runPercyTest) {
    percyTests(test);
  }
});
