import Component from '@glimmer/component';
import config from 'ember-get-config';

export default class OnThisPageComponent extends Component {
  headerPrefix = config?.showdown?.prefixHeaderId ?? '';
}
