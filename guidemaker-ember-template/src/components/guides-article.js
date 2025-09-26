import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

// TODO remove this and use appEmberSatisfies() from @embroider/macros when it's done
import config from 'ember-get-config';

export default class GuidesArticleComponent extends Component {
  @service page;
  @service guidemaker;

  get gjsLink() {
    return config?.guidemaker?.gjsLink;
  }

  get showGJSBanner() {
    return (
      Array.isArray(config?.guidemaker?.gjsVersions) &&
      Boolean(config.guidemaker.gjsVersions.includes(this.args.version))
    );
  }

  get editVersion() {
    if (this.page.currentVersion === 'release') {
      return '';
    }

    if (this.args.version === this.args.currentVersion) {
      return 'release/';
    }

    return `${this.page.currentVersion}/`;
  }
}
