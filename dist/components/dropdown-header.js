import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div class=\"algolia-docsearch-suggestion algolia-docsearch-suggestion__main\">\n  <div class=\"algolia-docsearch-suggestion--category-header\">\n    <span class=\"algolia-docsearch-suggestion--category-header-lvl0\">\n      {{yield}}\n    </span>\n  </div>\n  <div class=\"algolia-docsearch-suggestion--wrapper\"></div>\n</div>");

var dropdownHeader = setComponentTemplate(TEMPLATE, templateOnly());

export { dropdownHeader as default };
//# sourceMappingURL=dropdown-header.js.map
