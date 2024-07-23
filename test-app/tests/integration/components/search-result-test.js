import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';

class PageStub extends Service {
  pages = [
    {
      id: 'examples',
      title: 'Examples',
    },
  ];
}

module('Integration | Component | search-result', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the search result', async function (assert) {
    this.owner.register('service:page', PageStub);

    this.result = {
      path: 'examples/index',
      anchor: 'toc_images',
      _highlightResult: {
        headings: [
          {
            value: 'Basic Markdown',
          },
          {
            value: 'Images',
          },
        ],
      },
    };

    await render(hbs`<SearchResult @result={{this.result}} />`);

    assert
      .dom('.algolia-docsearch-suggestion--subcategory-column-text')
      .hasText('Examples');

    assert
      .dom('.algolia-docsearch-suggestion--title')
      .hasText('Basic Markdown > Images');
  });
});
