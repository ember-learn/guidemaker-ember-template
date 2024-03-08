import searchResponse from './fixtures/search-response';

import { createServer } from 'miragejs';
export default function makeServer(config) {
  let finalConfig = {
    factories: config.factories,
    models: config.models,
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  this.post(
    'https://FAKEKEY-dsn.algolia.net/1/indexes/ember-guides/query',
    () => {
      return searchResponse;
    },
  );

  this.passthrough();
}
