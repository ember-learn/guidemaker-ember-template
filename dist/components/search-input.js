import { buildTask } from 'ember-concurrency/async-arrow-runtime';
import { inject } from '@ember/service';
import { and } from '@ember/object/computed';
import { getOwner } from '@ember/application';
import Component, { setComponentTemplate } from '@ember/component';
import { set, action } from '@ember/object';
import { timeout } from 'ember-concurrency';
import { precompileTemplate } from '@ember/template-compilation';
import { g, i, n } from 'decorator-transforms/runtime';

var TEMPLATE = precompileTemplate("{{!-- template-lint-disable link-rel-noopener no-action no-curly-component-invocation --}}\n{{#if this.searchService.index}}\n  <input\n    id=\"search-input\"\n    type=\"search\"\n    value={{this.value}}\n    oninput={{perform this.search value=\"target.value\"}}\n    placeholder=\"Search the guides\"\n    autocomplete=\"off\"\n    onfocus={{action \"onfocus\"}}\n    onblur={{action \"onblur\"}}\n    data-test-search-input\n  >\n\n  {{!-- Search results dropdown --}}\n  <EmberTether @target=\"#search-input\" @targetAttachment=\"bottom right\" @attachment=\"top right\" @constraints={{this._resultTetherConstraints}} @class=\"ds-dropdown-results\">\n    {{#if this.showDropdown}}\n      <div class=\"ds-suggestions ds-dropdown-menu\">\n        <DropdownHeader>\n          Search Results\n        </DropdownHeader>\n\n        {{#each this.searchService.results as |result|}}\n          <SearchResult @result={{result}} />\n        {{else}}\n          <div class=\"algolia-docsearch-suggestion\">\n            <div class=\"algolia-docsearch-suggestion--noresults\">\n              <p>\n                No results found.\n                {{#if this.deprecationsGuideURL}}\n                  Try searching the <a href={{this.deprecationsGuideURL}} target=\"_deprecations\">deprecations guide</a>.\n                {{/if}}\n              </p>\n            </div>\n          </div>\n        {{/each}}\n        <div class=\"powered-by-algolia\">\n          <a href=\"https://www.algolia.com/\" target=\"_blank\" rel=\"noopener\">\n            <img src=\"/images/logos/search-by-algolia.svg\" alt=\"Search Powered by Algolia\">\n          </a>\n        </div>\n      </div>\n    {{/if}}\n  </EmberTether>\n{{/if}}\n");

const SEARCH_DEBOUNCE_PERIOD = 300;
const SEARCH_CLOSE_PERIOD = 200;
class SearchInput extends Component {
  static {
    g(this.prototype, "searchService", [inject('search')]);
  }
  #searchService = (i(this, "searchService"), void 0);
  _resultTetherConstraints = Object.freeze([{
    to: 'window',
    pin: ['left', 'right']
  }]);
  _focused = false;
  constructor() {
    super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');
    this.deprecationsGuideURL = config['deprecationsGuideURL'];
  }
  static {
    g(this.prototype, "showDropdown", [and('query', '_focused')]);
  }
  #showDropdown = (i(this, "showDropdown"), void 0);
  search = buildTask(() => ({
    context: this,
    generator: function* (query) {
      yield timeout(SEARCH_DEBOUNCE_PERIOD);
      set(this, 'query', query);

      // Hide and don't run query if there's no search query
      if (!query) {
        return set(this, '_focused', false);
      }

      // ensure search results are visible if the menu was previously closed above
      set(this, '_focused', true);
      yield this.searchService.search.perform(query, this.projectVersion);
    }
  }), null, "search", "restartable");
  closeMenu = buildTask(() => ({
    context: this,
    generator: function* () {
      yield timeout(SEARCH_CLOSE_PERIOD);
      set(this, '_focused', false);
    }
  }), null, "closeMenu", null);
  onfocus() {
    set(this, '_focused', true);
  }
  static {
    n(this.prototype, "onfocus", [action]);
  }
  onblur() {
    this.closeMenu.perform();
  }
  static {
    n(this.prototype, "onblur", [action]);
  }
}
setComponentTemplate(TEMPLATE, SearchInput);

export { SearchInput as default };
//# sourceMappingURL=search-input.js.map
