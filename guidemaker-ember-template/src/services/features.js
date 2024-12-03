import Service from '@ember/service';

export default class Features extends Service {
  features = {};
  setupFeatures(features) {
    this.features = features;
  }

  isEnabled(featureName) {
    return this.features[featureName];
  }
}
