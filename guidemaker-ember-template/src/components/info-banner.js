import Component from '@glimmer/component';
import config from 'ember-get-config';

export default class InfoBannerComponent extends Component {
  get config() {
    return config[this.args.configName];
  }
}
