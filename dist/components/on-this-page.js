import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{#if @toc}}\n  <div class=\"on-this-page-wrapper\" {{highlight-active-title @toc}}>\n    <div class=\"on-this-page-wrapper-header\">On this page</div>\n    <hr>\n    <ul>\n      {{#each @toc as |toc|}}\n       {{#if (or (eq toc.depth \'1\') (eq toc.depth \'2\') (eq toc.depth \'3\'))}}\n          <li>\n            <a href=\"#{{toc.id}}\" class=\"on-this-page-depth-{{toc.depth}}\">{{toc.text}}</a>\n          </li>\n        {{/if}}\n      {{/each}}\n    </ul>\n    {{yield}}\n  </div>\n{{/if}}");

var onThisPage = setComponentTemplate(TEMPLATE, templateOnly());

export { onThisPage as default };
//# sourceMappingURL=on-this-page.js.map
