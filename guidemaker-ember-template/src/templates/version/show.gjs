import RouteTemplate from 'ember-route-template';

import GuidesArticle from '../../components/guides-article';

export default RouteTemplate(<template>
  <GuidesArticle
    @model={{@controller.model.content}}
    @pages={{@controller.model.pages}}
    @path={{@controller.model.path}}
    @version={{@controller.model.version}}
    @currentVersion={{@controller.model.currentVersion}}
  />
</template>);
