import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! template-lint-disable no-unsupported-role-attributes }}\n<ul class=\"table-of-contents\" ...attributes>\n  {{#each @data as |page|}}\n    {{! template-lint-disable simple-unless }}\n    {{#unless (or page.skipToc (get page \"skip-toc\"))}}\n      {{#if page.pages}}\n        {{#let\n          (starts-with (or page.url page.id) (or @currentSection.url @currentSection.id))\n          as |sectionOpen|\n        }}\n          <li class=\"toc-item toc-group\" aria-expanded={{if sectionOpen \"true\" \"false\"}}>\n            <CpPanel @open={{sectionOpen}} as |p|>\n              <LinkTo @route=\"version.show\" @model={{or page.url page.id}} class=\"section-title\" data-test-toc-link={{page.title}}>\n                <span class=\"link-text\">\n                  {{page.title}}\n                </span>\n              </LinkTo>\n              <p.body>\n                <TableOfContents @data={{page.pages}} @currentPage={{@currentPage}} @currentSection={{@currentSection}} class=\"sub-table-of-contents\" />\n              </p.body>\n            </CpPanel>\n          </li>\n        {{/let}}\n      {{else if page.isHeading}}\n        <li class=\"toc-heading\">{{page.title}}</li>\n      {{else}}\n        <li class=\"toc-item toc-link {{if (eq @currentPage.url page.url) \"selected\"}}\">\n          <LinkTo @route=\"version.show\" @model={{page.url}} data-test-toc-link={{page.title}}>\n            <span class=\"link-text\">\n              {{page.title}}\n            </span>\n          </LinkTo>\n        </li>\n      {{/if}}\n    {{/unless}}\n  {{/each}}\n</ul>");

var TableOfContents = setComponentTemplate(TEMPLATE, templateOnly());

export { TableOfContents as default };
//# sourceMappingURL=table-of-contents.js.map
