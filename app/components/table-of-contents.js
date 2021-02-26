/* eslint-disable ember/no-classic-components, ember/no-classic-classes, ember/require-tagless-components, prettier/prettier */
import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  fastboot: service(),

  level: '0',
  tagName: 'ol',
  tocLevel: computed('level', function() {
    return `toc-level-${this.level}`;
  }),
  classNameBindings: ['tocLevel'],
});
