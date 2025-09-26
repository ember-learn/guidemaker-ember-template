import RouteTemplate from 'ember-route-template';
import GuidesArticleComponent from '../../components/guides-article.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var index = RouteTemplate(setComponentTemplate(precompileTemplate("\n  <GuidesArticle @model={{@controller.model.content}} @pages={{@controller.model.pages}} @path=\"index\" @version={{@controller.model.version}} @currentVersion={{@controller.model.currentVersion}} />\n", {
  strictMode: true,
  scope: () => ({
    GuidesArticle: GuidesArticleComponent
  })
}), templateOnly()));

export { index as default };
//# sourceMappingURL=index.js.map
