import searchResponse from './fixtures/search-response';

export default function () {
  this.post(
    'https://FAKEKEY-dsn.algolia.net/1/indexes/ember-guides/query',
    () => {
      return searchResponse;
    }
  );

  this.passthrough();
}
