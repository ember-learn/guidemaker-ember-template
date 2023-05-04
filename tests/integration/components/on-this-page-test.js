import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | on-this-page', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('toc', [
      { text: 'Introduction', id: '1' },
      { text: 'Follow-up item', id: '2' },
    ]);

    await render(hbs`<OnThisPage @toc={{this.toc}} />`);

    assert.dom(this.element).containsText('On this page');
  });
});
