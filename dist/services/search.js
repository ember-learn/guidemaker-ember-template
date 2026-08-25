import { buildTask } from 'ember-concurrency/async-arrow-runtime';
import Service from '@ember/service';
import 'ember-concurrency';
import { set } from '@ember/object';
import algoliasearch from 'algoliasearch';
import { getOwner } from '@ember/application';

class SearchService extends Service {
  results = [];
  constructor() {
    super(...arguments);
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
  }
  search = buildTask(() => ({
    context: this,
    generator: function* (query, projectVersion) {
      const searchObj = {
        hitsPerPage: 15,
        restrictSearchableAttributes: ['content']
      };
      if (projectVersion && projectVersion.match(/\d+\.\d+\.\d+/)) {
        searchObj.facetFilters = [[`version:${projectVersion}`]];
      }
      return set(this, 'results', yield this.doSearch(query, searchObj));
    }
  }), null, "search", null);
  doSearch(query, searchObj) {
    return this.index.search(query, searchObj).then(results => {
      return results.hits;
    });
  }
}

export { SearchService as default };
//# sourceMappingURL=search.js.map
