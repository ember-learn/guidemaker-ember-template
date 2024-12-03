import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, blur, waitFor } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';
import mirageConfig from 'test-app/mirage/config';
import { setupMirage } from 'ember-mirage/test-support';

// Stub page service
class PageStub extends Service {
  pages = [
    {
      id: 'examples',
      title: 'Examples',
    },
    {
      id: 'index',
      title: 'Home',
    },
  ];
}

module('Integration | Component | search-input', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks, { makeServer: mirageConfig });

  hooks.beforeEach(async function () {
    this.owner.register('service:page', PageStub);
  });

  test('it renders the inital search input without dropdown', async function (assert) {
    await render(hbs`<SearchInput @projectVersion="v1.0.0" />`);

    assert.dom('[data-test-search-input]').exists();
    assert.dom('[data-test-search-dropdown]').doesNotExist();
  });

  test('it renders the search dropdown while searching', async function (assert) {
    await render(hbs`<SearchInput @projectVersion="v1.0.0" />`);

    await fillIn('[data-test-search-input]', 'query string');

    assert.dom('[data-test-search-input]').hasValue('query string');
    assert.dom('[data-test-search-dropdown]').exists();
  });

  test('it renders the search input with a closed dropdown after blur', async function (assert) {
    await render(hbs`<SearchInput @projectVersion="v1.0.0" />`);

    await fillIn('[data-test-search-input]', 'query string');
    await waitFor('[data-test-search-result-item]');
    await blur('[data-test-search-input]');

    assert.dom('[data-test-search-input]').hasValue('query string');
    assert.dom('[data-test-search-dropdown]').doesNotExist();
  });

  test('it renders the results', async function (assert) {
    await render(hbs`<SearchInput @projectVersion="v1.0.0" />`);
    await fillIn('[data-test-search-input]', 'query string');

    await waitFor('[data-test-search-result-item]');

    assert.dom('[data-test-search-result-item]').exists({ count: 4 });
  });

  test('it renders the no results message', async function (assert) {
    this.searchService = this.owner.lookup('service:search');

    await render(hbs`<SearchInput @projectVersion="v1.0.0" />`);
    await fillIn('[data-test-search-input]', 'query string');
    this.searchService.results = [];
    await waitFor('[data-test-search-noresults]');
    assert.dom('[data-test-search-noresults]').hasText('No results found.');
  });
});
