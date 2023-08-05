/* eslint-disable ember/no-classic-components, ember/no-classic-classes, ember/require-tagless-components, prettier/prettier, ember/no-get, ember/no-actions-hash */
import { getOwner } from '@ember/application';
import Component from '@ember/component';

import layout from '../templates/components/search-input';

import docsearch from '@docsearch/js';

import '@docsearch/css';

export default Component.extend({
  layout,

  classNames: ['search-input'],

  didInsertElement() {
    const config = getOwner(this).resolveRegistration('config:environment');
    const { algoliaId, algoliaKey, indexName } = config['algolia'] || {};

    const docsearchParams = {
      container: '#docsearch',
      placeholder: 'Search the guides',
      appId: algoliaId,
      indexName: indexName,
      apiKey: algoliaKey,
      searchParameters: {
        hitsPerPage: 15,
        restrictSearchableAttributes: ['content'],
      },
    };

    if (this.projectVersion && this.projectVersion.match(/\d+\.\d+\.\d+/)) {
      docsearchParams.searchParameters.facetFilters = [
        [`version:${this.projectVersion}`],
      ];
    }

    docsearch(docsearchParams);
  },
});
