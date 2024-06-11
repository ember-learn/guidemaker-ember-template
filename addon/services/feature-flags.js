import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FeatureFlagService extends Service {
  @tracked flags = [];

  get featureFlagCssClass() {
    return this.flags.join(' ');
  }

  enableFeatureFlag(flag) {
    this.flags = [...this.flags, flag];
    this.updateFlagsInDocument();
  }

  disableFeatureFlag(flag) {
    this.flags = this.flags.filter((f) => f !== flag);
    this.updateFlagsInDocument();
  }

  updateFlagsInDocument() {
    // alternatively/cleaner solution: render this declaratively in the application.hbs template
    document.body.className = this.featureFlagCssClass;
  }
}
