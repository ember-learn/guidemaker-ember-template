import { getOwner } from '@ember/application';
import Component from '@ember/component';
import { set } from '@ember/object';
import { later } from '@ember/runloop';
import algoliasearch from 'algoliasearch';
import { task, timeout } from 'ember-concurrency';
import { denodeify } from 'rsvp';

import layout from '../templates/components/search-input';

const SEARCH_DEBOUNCE_PERIOD = 300;

export default Component.extend({
  layout,

  classNames: ['search-input'],

  _resultTetherConstraints: Object.freeze([
    {
      to: 'window',
      pin: ['left','right']
    }
  ]),

  init() {
    this._super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');

    const { algoliaId, algoliaKey, indexName } = config['algolia'] || {};

    if(algoliaId && algoliaKey && indexName) {
      this.client = algoliasearch(algoliaId, algoliaKey);
      this.index = this.client.initIndex(indexName);
      this.searchFunction = denodeify(this.index.search.bind(this.index));
    }
  },

  search: task(function * (query) {
    yield timeout(SEARCH_DEBOUNCE_PERIOD);

    if(!query) {
      return set(this, 'response', null);
    }

    const searchObj = {
      hitsPerPage: 15,
      query
    };

    if(this.projectVersion && this.projectVersion.match(/\d+\.\d+\.\d+/)) {
      searchObj.facetFilters = [[`version:${this.projectVersion}`]];
    }

    let res = yield this.searchFunction(searchObj);

    return set(this, 'response', res);
  }).restartable(),

  actions: {
    oninput(value) {
      set(this, 'value', value);
      if(value) {
        this.search.perform(value);
      }
    },

    onfocus() {
      set(this, '_focused', true);
    },

    onblur() {
      later(this, function () {
        set(this, '_focused', false);
      }, 200);
    }

  }
});
