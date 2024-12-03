import Service from '@ember/service';
import { task } from 'ember-concurrency';
import { set, get } from '@ember/object';
import { A } from '@ember/array';
import algoliasearch from 'algoliasearch';
import { getOwner } from '@ember/application';

/* eslint-disable ember/no-classic-classes, prettier/prettier, ember/no-get */
var search = Service.extend({
  results: A(),
  init() {
    this._super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');
    const {
      algoliaId,
      algoliaKey,
      indexName
    } = config['algolia'] || {};
    if (algoliaId && algoliaKey && indexName) {
      this.client = algoliasearch(algoliaId, algoliaKey);
      this.index = this.client.initIndex(indexName);
    }
  },
  search: task(function* (query, projectVersion) {
    const searchObj = {
      hitsPerPage: 15,
      restrictSearchableAttributes: ['content']
    };
    if (projectVersion && projectVersion.match(/\d+\.\d+\.\d+/)) {
      searchObj.facetFilters = [[`version:${projectVersion}`]];
    }
    return set(this, 'results', yield this.doSearch(query, searchObj));
  }).restartable(),
  doSearch(query, searchObj) {
    return this.index.search(query, searchObj).then(results => {
      return get(results, 'hits');
    });
  }
});

export { search as default };
//# sourceMappingURL=search.js.map
