import { module, test } from 'qunit';
import { visit, fillIn, waitFor } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-mirage/test-support';
import mirageConfig from 'dummy/mirage/config';

module('Acceptance | search', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks, { makeServer: mirageConfig });

  test('search for items', async function (assert) {
    await visit('/');

    await fillIn('[data-test-search-input]', 'some data documentation');

    // this is a good place to put your test in development mode ;)
    // await this.pauseTest();

    // this is needed now because ember-mirage doesn't seem to automatically add test waiters
    await waitFor('[data-test-search-result-item]');

    // TODO add more valuable assertions
    assert.dom('[data-test-search-result-item]').exists({ count: 4 });
  });
});
