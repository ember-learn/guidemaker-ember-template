import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';

// Stub page service
class PageStub extends Service {
  currentVersion = 'v1.0.0';
  currentPage = {
    title: 'This is the current page title',
  };
}

module('Integration | Component | guides-article', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the component', async function (assert) {
    await render(hbs`
      <GuidesArticle />
    `);

    assert.dom('.article-title').exists();
    assert.dom('.guides-article-toc').exists();
  });

  test('it does not show the version warning if the current version is the selected version', async function (assert) {
    this.version = 'v1.0.0';
    this.currentVersion = 'v1.0.0';

    await render(hbs`
      <GuidesArticle @version={{this.version}} @currentVersion={{this.currentVersion}}/>
    `);

    assert.dom('.old-version-warning').doesNotExist();
  });

  test('it show the version warning if the selected version is not the current version', async function (assert) {
    this.version = 'v1.0.0';
    this.currentVersion = 'v2.0.0';

    await render(hbs`
      <GuidesArticle @version={{this.version}} @currentVersion={{this.currentVersion}}/>
    `);

    assert.dom('.old-version-warning').exists();
    assert
      .dom('.old-version-warning')
      .hasText(
        'Old Guides - You are viewing the guides for Ember v1.0.0. Go to v2.0.0',
      );
  });

  test('it show the correct page title', async function (assert) {
    this.owner.register('service:page', PageStub);

    await render(hbs`
      <GuidesArticle />
    `);

    assert.dom('.article-title').hasText('This is the current page title');
  });

  test('it renders the edit link for the current release', async function (assert) {
    this.owner.register('service:page', PageStub);

    this.model = {
      id: 'model-id',
    };

    await render(hbs`
      <GuidesArticle @model={{this.model}} />
    `);

    assert
      .dom('.edit-page')
      .hasProperty(
        'href',
        'https://github.com/ember-learn/guidemaker-ember-template/edit/master/guides/release/model-id.md',
      );
  });

  test('it renders the edit link for the selected version', async function (assert) {
    this.owner.register('service:page', PageStub);

    this.model = {
      id: 'model-id',
    };

    await render(hbs`
      <GuidesArticle @model={{this.model}} @version="v1.0.0" />
    `);

    assert
      .dom('.edit-page')
      .hasProperty(
        'href',
        'https://github.com/ember-learn/guidemaker-ember-template/edit/master/guides/v1.0.0/model-id.md',
      );
  });
});
