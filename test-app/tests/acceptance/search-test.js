import { module, test } from 'qunit';
import { visit, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | search', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('search for items', async function (assert) {
    await visit('/');

    await fillIn('[data-test-search-input]', 'some data documentation');

    // this is a good place to put your test in development mode ;)
    // await this.pauseTest();

    // TODO add more valuable assertions
    assert.dom('[data-test-search-result-item]').exists({ count: 4 });
  });
});
