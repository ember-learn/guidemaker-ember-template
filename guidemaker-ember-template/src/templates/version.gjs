import RouteTemplate from 'ember-route-template';

import EsSidebar from 'ember-styleguide/components/es-sidebar';
import PowerSelect from 'ember-power-select/components/power-select';

import TableOfContents from '../components/table-of-contents';
import shortenVersion from 'guidemaker/helpers/shorten-version';

function includes(needle, haystack) {
  return haystack.includes(needle);
}

export default RouteTemplate(<template>
{{!-- template-lint-disable no-action --}}
<div class="sidebar-container">
  <EsSidebar>
    <label for="version-select" class="visually-hidden">Guides version</label>
    {{#if @controller.versions}}
      <PowerSelect
        @options={{@controller.versions}}
        @onChange={{@controller.actions.selectVersion}}
        @selected={{@model.version}}
        @renderInPlace={{true}}
        as |version|>
        {{shortenVersion version}} {{#if (includes version @controller.application.model.ltsVersions)}}(LTS){{/if}}
      </PowerSelect>
    {{/if}}
    <nav class="toc-container {{if @controller.versions "versions"}}" aria-label="table of contents">
      <TableOfContents
        @data={{@model.pages}}
        @currentSection={{@controller.page.currentSection}}
        @currentPage={{@controller.page.currentPage}}
      />
    </nav>
  </EsSidebar>
  {{outlet}}
</div>
</template>);
