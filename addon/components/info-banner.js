import Component from '@ember/component';
import layout from '../templates/components/info-banner';

import { getOwner } from '@ember/application';

export default Component.extend({
  layout,
  tagName: '',
  init() {
    this._super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');
    this.config = config[this.configName];
  },
});
