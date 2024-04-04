import RouteTemplate from 'ember-route-template';

import HeadLayout from 'ember-cli-head/components/head-layout';
import EsFooter from 'ember-styleguide/components/es-footer';
import EsHeader from 'ember-styleguide/components/es-header';
import EsProgressBar from 'ember-styleguide/components/es-progress-bar';

import SearchInput from '../components/search-input';
import InfoBanner from '../components/info-banner';

import '../styles/addon.css';
import '../styles/agola-search.css';
import '../styles/on-this-page.css';

export default RouteTemplate(<template>
<HeadLayout />

<EsHeader>
  <SearchInput @projectVersion={{@controller.page.currentVersion}} />
</EsHeader>
<EsProgressBar />

<InfoBanner @configName="survey" />
<InfoBanner @configName="infoBanner" />


<main>
  {{outlet}}
</main>

<EsFooter />
</template>);
