import { getOwner } from '@ember/application';
import Component, { setComponentTemplate } from '@ember/component';
import { set, get } from '@ember/object';
import { and } from '@ember/object/computed';
import { inject } from '@ember/service';
import { task, timeout } from 'ember-concurrency';
import { precompileTemplate } from '@ember/template-compilation';

var TEMPLATE = precompileTemplate("{{!-- template-lint-disable link-rel-noopener no-action no-curly-component-invocation --}}\n{{#if this.searchService.index}}\n  <input\n    id=\"search-input\"\n    type=\"search\"\n    value={{this.value}}\n    oninput={{perform this.search value=\"target.value\"}}\n    placeholder=\"Search the guides\"\n    autocomplete=\"off\"\n    onfocus={{action \"onfocus\"}}\n    onblur={{action \"onblur\"}}\n    data-test-search-input\n  >\n\n  {{!-- Search results dropdown --}}\n  <EmberTether @target=\"#search-input\" @targetAttachment=\"bottom right\" @attachment=\"top right\" @constraints={{this._resultTetherConstraints}} @class=\"ds-dropdown-results\">\n    {{#if this.showDropdown}}\n      <div class=\"ds-suggestions ds-dropdown-menu\">\n        <DropdownHeader>\n          Search Results\n        </DropdownHeader>\n\n        {{#each this.searchService.results as |result|}}\n          <SearchResult @result={{result}} />\n        {{else}}\n          <div class=\"algolia-docsearch-suggestion\">\n            <div class=\"algolia-docsearch-suggestion--noresults\">\n              <p>\n                No results found.\n                {{#if this.deprecationsGuideURL}}\n                  Try searching the <a href={{this.deprecationsGuideURL}} target=\"_deprecations\">deprecations guide</a>.\n                {{/if}}\n              </p>\n            </div>\n          </div>\n        {{/each}}\n        <div class=\"powered-by-algolia\">\n          <a href=\"https://www.algolia.com/\" target=\"_blank\" rel=\"noopener\">\n            <img src=\"/images/logos/search-by-algolia.svg\" alt=\"Search Powered by Algolia\">\n          </a>\n        </div>\n      </div>\n    {{/if}}\n  </EmberTether>\n{{/if}}\n");

/* eslint-disable ember/no-classic-components, ember/no-classic-classes, ember/require-tagless-components, prettier/prettier, ember/no-get, ember/no-actions-hash */
const SEARCH_DEBOUNCE_PERIOD = 300;
const SEARCH_CLOSE_PERIOD = 200;
var SearchInput = setComponentTemplate(TEMPLATE, Component.extend({
  classNames: ['search-input'],
  searchService: inject('search'),
  _resultTetherConstraints: Object.freeze([{
    to: 'window',
    pin: ['left', 'right']
  }]),
  _focused: false,
  init() {
    this._super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');
    this.deprecationsGuideURL = config['deprecationsGuideURL'];
  },
  showDropdown: and('query', '_focused'),
  search: task(function* (query) {
    yield timeout(SEARCH_DEBOUNCE_PERIOD);
    set(this, 'query', query);

    // Hide and don't run query if there's no search query
    if (!query) {
      return set(this, '_focused', false);
    }

    // ensure search results are visible if the menu was previously closed above
    set(this, '_focused', true);
    yield get(this, 'searchService.search').perform(query, this.projectVersion);
  }).restartable(),
  closeMenu: task(function* () {
    yield timeout(SEARCH_CLOSE_PERIOD);
    set(this, '_focused', false);
  }),
  actions: {
    onfocus() {
      set(this, '_focused', true);
    },
    onblur() {
      this.get('closeMenu').perform();
    }
  }
}));

export { SearchInput as default };
//# sourceMappingURL=search-input.js.map
