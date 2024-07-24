import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';

// Stub page service
class PageStub extends Service {
  isLastPage = false;
  currentSection = {
    title: 'Current Section',
  };
  nextSection = {
    title: 'Next Section',
  };
  previousPage = {
    url: 'previous-url/index',
    title: 'Previous Page',
  };
  nextPage = {
    url: 'next-url/index',
    title: 'Next Page',
  };
}

module('Integration | Component | chapter-links', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders and empty wrapper if nextPage and previousPage does not exist', async function (assert) {
    await render(hbs`<ChapterLinks />`);

    assert.dom('.pagination-wrapper').exists();
    assert.dom('.previous-guide').doesNotExist();
    assert.dom('.next-guide').doesNotExist();
  });

  test('it renders the next and previous link', async function (assert) {
    this.owner.register('service:page', PageStub);

    await render(hbs`<ChapterLinks />`);

    assert.dom('.pagination-wrapper').exists();
    assert.dom('.previous-guide').exists();
    assert.dom('.next-guide').exists();
  });

  test('it renders the isLastPage section link label', async function (assert) {
    this.owner.register('service:page', PageStub);

    this.pageService = this.owner.lookup('service:page', PageStub);
    this.pageService.isLastPage = true;

    await render(hbs`<ChapterLinks />`);

    assert
      .dom('.next-guide')
      .hasText(
        "We've finished covering Current Section. Next up: Next Section - Next Page",
      );
  });

  test('it renders the isFistPage link label', async function (assert) {
    this.owner.register('service:page', PageStub);

    this.pageService = this.owner.lookup('service:page', PageStub);
    this.pageService.nextIsFirstPage = true;

    await render(hbs`<ChapterLinks />`);

    assert.dom('.next-guide').hasText('Next Section - Next Page');
  });
});
