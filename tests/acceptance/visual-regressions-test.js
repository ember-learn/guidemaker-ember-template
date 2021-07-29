/* eslint-disable prettier/prettier */
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';

import config from '../../config/environment';

module('Acceptance | visual regressions', function(hooks) {
  setupApplicationTest(hooks);

  if(config.runPercyTest) {
    test('visual regressions with Percy', async function(assert) {
      assert.expect(0);
      await visit('/release');

      let store = this.owner.lookup('service:store');
      let pages = store.peekAll('page');

      await pages.reduce(async (prev, section) => {
        await prev;

        return section.get('pages')?.reduce(async (prev, page) => {
          await prev;

          await visit(`/release/${page.url}`);

          let name = `/${page.url}/index.html`;

          if (page.url.endsWith('index')) {
            name = `/${page.url}.html`;
          } else if (page.url.endsWith('index/')) {
            name = '/index.html';
          }

          await percySnapshot(name);
        }, Promise.resolve());
      }, Promise.resolve());
    });
  }
});
