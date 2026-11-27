import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';

module('Acceptance | head', function (hooks) {
  setupApplicationTest(hooks);

  test('the page puts its own description and the site title into <head>', async function (assert) {
    await visit('/release');

    assert
      .dom('meta[property="og:description"]', document.head)
      .hasAttribute('content', /^Welcome to the Ember Guides/);
    assert
      .dom('meta[property="og:title"]', document.head)
      .hasAttribute('content', /Ember Guidemaker Template/);
    assert.dom('meta[name="referrer"]', document.head).exists({ count: 1 });
  });
});
