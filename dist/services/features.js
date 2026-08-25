import Service from '@ember/service';

class Features extends Service {
  features = {};
  setupFeatures(features) {
    this.features = features;
  }
  isEnabled(featureName) {
    return this.features[featureName];
  }
}

export { Features as default };
//# sourceMappingURL=features.js.map
