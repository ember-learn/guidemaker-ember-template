import RouteTemplate from 'ember-route-template';
import HeadLayout from 'ember-cli-head/components/head-layout';
import EsFooter from 'ember-styleguide/components/es-footer';
import EsHeader from 'ember-styleguide/components/es-header';
import EsProgressBar from 'ember-styleguide/components/es-progress-bar';
import SearchInput from '../components/search-input.js';
import InfoBannerComponent from '../components/info-banner.js';
import '../styles/addon.css';
import '../styles/agola-search.css';
import '../styles/on-this-page.css';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var application = RouteTemplate(setComponentTemplate(precompileTemplate("\n<HeadLayout />\n\n<EsHeader>\n  <SearchInput @projectVersion={{@controller.page.currentVersion}} />\n</EsHeader>\n<EsProgressBar />\n\n<InfoBanner @configName=\"survey\" />\n<InfoBanner @configName=\"infoBanner\" />\n\n\n<main>\n  {{outlet}}\n</main>\n\n<EsFooter />\n", {
  strictMode: true,
  scope: () => ({
    HeadLayout,
    EsHeader,
    SearchInput,
    EsProgressBar,
    InfoBanner: InfoBannerComponent,
    EsFooter
  })
}), templateOnly()));

export { application as default };
//# sourceMappingURL=application.js.map
