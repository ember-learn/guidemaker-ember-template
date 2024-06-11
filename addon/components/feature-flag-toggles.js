import Component from '@glimmer/component';
// import { service } from '@ember/service';

export default class FeatureFlagTogglesComponent extends Component {
  // TODO: service decorator doesn't work in this app? :(
  // @service featureFlags;

  setup() {
    document.body.className = 'classic-component';
  }

  toggle(event) {
    if (event.target.checked) {
      // this.featureFlags.enableFeatureFlag('template-tag');
      // this.featureFlags.disableFeatureFlag('classic-component');
      document.body.className = 'template-tag';
    } else {
      // this.featureFlags.disableFeatureFlag('template-tag');
      // this.featureFlags.enableFeatureFlag('classic-component');
      document.body.className = 'classic-component';
    }
  }
}
