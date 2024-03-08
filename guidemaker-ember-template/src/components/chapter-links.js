/* eslint-disable ember/no-classic-components, ember/no-classic-classes, ember/require-tagless-components */
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: 'footer',

  page: service(),
});
