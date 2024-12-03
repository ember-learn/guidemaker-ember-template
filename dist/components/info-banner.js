import Component from '@glimmer/component';
import config from 'ember-get-config';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{#if this.config}}\n  <div class=\"info-banner-wrapper\">\n    <div class=\"info-banner-container\">\n      <MarkdownToHtml @markdown={{this.config.content}} />\n    </div>\n  </div>\n{{/if}}\n");

class InfoBannerComponent extends Component {
  get config() {
    return config[this.args.configName];
  }
}
setComponentTemplate(TEMPLATE, InfoBannerComponent);

export { InfoBannerComponent as default };
//# sourceMappingURL=info-banner.js.map
