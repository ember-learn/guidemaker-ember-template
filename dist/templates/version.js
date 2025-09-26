import RouteTemplate from 'ember-route-template';
import EsSidebar from 'ember-styleguide/components/es-sidebar';
import PowerSelect from 'ember-power-select/components/power-select';
import TableOfContents from '../components/table-of-contents.js';
import shortenVersion from 'guidemaker/helpers/shorten-version';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

function includes(needle, haystack) {
  return haystack.includes(needle);
}
var version = RouteTemplate(setComponentTemplate(precompileTemplate("\n{{!-- template-lint-disable no-action --}}\n<div class=\"sidebar-container\">\n  <EsSidebar>\n    <label for=\"version-select\" class=\"visually-hidden\">Guides version</label>\n    {{#if @controller.versions}}\n      <PowerSelect @options={{@controller.versions}} @onChange={{@controller.actions.selectVersion}} @selected={{@model.version}} @renderInPlace={{true}} as |version|>\n        {{shortenVersion version}} {{#if (includes version @controller.application.model.ltsVersions)}}(LTS){{/if}}\n      </PowerSelect>\n    {{/if}}\n    <nav class=\"toc-container {{if @controller.versions \"versions\"}}\" aria-label=\"table of contents\">\n      <TableOfContents @data={{@model.pages}} @currentSection={{@controller.page.currentSection}} @currentPage={{@controller.page.currentPage}} />\n    </nav>\n  </EsSidebar>\n  {{outlet}}\n</div>\n", {
  strictMode: true,
  scope: () => ({
    EsSidebar,
    PowerSelect,
    shortenVersion,
    includes,
    TableOfContents
  })
}), templateOnly()));

export { version as default };
//# sourceMappingURL=version.js.map
