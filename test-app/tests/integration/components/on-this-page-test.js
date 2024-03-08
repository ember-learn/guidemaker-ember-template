import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | on-this-page', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('toc', [
      { text: 'Introduction', id: '1', depth: '1' },
      { text: 'Follow-up item', id: '2', depth: '2' },
    ]);

    await render(hbs`<OnThisPage @toc={{this.toc}} />`);

    assert.dom(this.element).containsText('On this page');
  });

  test('only renders headings up until depth 3', async function (assert) {
    this.set('toc', [
      { text: 'h1', id: '1', depth: '1' },
      { text: 'h2', id: '2', depth: '2' },
      { text: 'h3', id: '3', depth: '3' },
      { text: 'h4', id: '4', depth: '4' },
    ]);

    await render(hbs`<OnThisPage @toc={{this.toc}} />`);

    assert.dom(this.element).containsText('h1');
    assert.dom(this.element).containsText('h1');
    assert.dom(this.element).containsText('h1');
    assert.dom(this.element).doesNotContainText('h4');
  });
});
