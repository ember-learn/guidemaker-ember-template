import Service from '@ember/service';
import { task } from 'ember-concurrency';
import { set } from '@ember/object';
import algoliasearch from 'algoliasearch';
import { getOwner } from '@ember/application';

export default class SearchService extends Service {
  results = [];

  constructor() {
    super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');

    const { algoliaId, algoliaKey, indexName } = config['algolia'] || {};

    if (algoliaId && algoliaKey && indexName) {
      this.client = algoliasearch(algoliaId, algoliaKey);
      this.index = this.client.initIndex(indexName);
    }
  }

  search = task(async (query, projectVersion) => {
    const searchObj = {
      hitsPerPage: 15,
      restrictSearchableAttributes: ['content'],
    };

    if (projectVersion && projectVersion.match(/\d+\.\d+\.\d+/)) {
      searchObj.facetFilters = [[`version:${projectVersion}`]];
    }

    return set(this, 'results', await this.doSearch(query, searchObj));
  });

  doSearch(query, searchObj) {
    return this.index.search(query, searchObj).then((results) => {
      return results.hits;
    });
  }
}
