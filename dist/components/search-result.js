import Component from '@glimmer/component';
import { inject } from '@ember/service';
import { precompileTemplate } from '@ember/template-compilation';
import { g, i } from 'decorator-transforms/runtime';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div class=\"ds-suggestion search-input\" ...attributes>\n  <div\n    class=\"algolia-docsearch-suggestion algolia-docsearch-suggestion__secondary\"\n    data-test-search-result-item\n  >\n    <div class=\"algolia-docsearch-suggestion--wrapper\">\n      <div class=\"algolia-docsearch-suggestion--subcategory-column\">\n        <span class=\"algolia-docsearch-suggestion--subcategory-column-text\">\n          {{this.sectionTitle}}\n        </span>\n      </div>\n      <div class=\"algolia-docsearch-suggestion--content\">\n        <a\n          href=\"{{href-to \'version.show\' @result.path}}#{{@result.anchor}}\"\n          data-href-to-ignore\n        >\n          <div class=\"algolia-docsearch-suggestion--title\">\n            {{#each this.remainingHeadings as |heading index|}}\n              {{#if index}}\n                >\n              {{/if}}\n              {{html-safe heading.value}}\n            {{/each}}\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n");

class SearchResultComponent extends Component {
  static {
    g(this.prototype, "page", [inject]);
  }
  #page = (i(this, "page"), void 0);
  get sectionTitle() {
    let sectionId = this.args.result.path.split('/')[0];
    let section = this.page.pages.find(page => page.id === sectionId);
    return section.title;
  }
  get remainingHeadings() {
    return this.args.result._highlightResult.headings;
  }
}
setComponentTemplate(TEMPLATE, SearchResultComponent);

export { SearchResultComponent as default };
//# sourceMappingURL=search-result.js.map
