/* eslint-disable ember/no-classic-classes, prettier/prettier, ember/no-get */
import Service from '@ember/service';
import { task } from 'ember-concurrency';
import { get, set } from '@ember/object';
import { A as emberArray } from '@ember/array';
import { denodeify } from 'rsvp';
import algoliasearch from 'algoliasearch';
import { getOwner } from '@ember/application';

export default Service.extend({

  results: emberArray(),

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

  search: task(function * (query, projectVersion) {
    const searchObj = {
      hitsPerPage: 15,
      restrictSearchableAttributes: ['content'],
      query
    };

    if(projectVersion && projectVersion.match(/\d+\.\d+\.\d+/)) {
      searchObj.facetFilters = [[`version:${projectVersion}`]];
    }

    return set(this, 'results', yield this.doSearch(searchObj));

  }).restartable(),

  doSearch(searchObj) {
    return this.searchFunction(searchObj).then((results) => {
      return get(results, 'hits');
    });
  }
});
