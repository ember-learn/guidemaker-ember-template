import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class GuidesArticleComponent extends Component {
  @service page;
  @service guidemaker;

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
