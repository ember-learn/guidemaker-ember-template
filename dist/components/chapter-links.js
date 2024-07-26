import Component from '@glimmer/component';
import { inject } from '@ember/service';
import { precompileTemplate } from '@ember/template-compilation';
import { g, i } from 'decorator-transforms/runtime';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<footer>\n  <EsPagination\n    @showPrevious={{this.page.previousPage}}\n    @showNext={{this.page.nextPage}}\n  >\n    <:previous>\n      <LinkTo\n        @route=\"version.show\"\n        @model={{this.page.previousPage.url}}\n        class=\"previous-guide\"\n      >\n        {{this.page.previousPage.title}}\n      </LinkTo>\n    </:previous>\n\n    <:next>\n      <LinkTo\n        @route=\"version.show\"\n        @model={{this.page.nextPage.url}}\n        class=\"next-guide\"\n      >\n        {{#if this.page.isLastPage}}\n          We\'ve finished covering\n          {{this.page.currentSection.title}}. Next up:\n          {{this.page.nextSection.title}}\n          -\n          {{this.page.nextPage.title}}\n        {{else if this.page.nextIsFirstPage}}\n          {{this.page.nextSection.title}}\n          -\n          {{this.page.nextPage.title}}\n        {{else}}\n          {{this.page.nextPage.title}}\n        {{/if}}\n      </LinkTo>\n    </:next>\n  </EsPagination>\n</footer>\n");

class ChapterLinksComponent extends Component {
  static {
    g(this.prototype, "page", [inject]);
  }
  #page = (i(this, "page"), void 0);
}
setComponentTemplate(TEMPLATE, ChapterLinksComponent);

export { ChapterLinksComponent as default };
//# sourceMappingURL=chapter-links.js.map
