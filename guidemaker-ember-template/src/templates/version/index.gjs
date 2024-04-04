import RouteTemplate from 'ember-route-template';

import GuidesArticle from '../../components/guides-article';

export default RouteTemplate(<template>
{{!-- template-lint-disable no-curly-component-invocation no-implicit-this --}}
<GuidesArticle @model={{@controller.model.content}} @pages={{@controller.model.pages}} @path="index" @version={{@controller.model.version}} @currentVersion={{@controller.model.currentVersion}} />
</template>);
