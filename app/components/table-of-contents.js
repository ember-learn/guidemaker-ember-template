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
  classNameBindings: ['tocLevel', 'list-unstyled'],
  levelTextSize: computed('level', function() {
    return Number(this.level) === 0 ? 'large' : 'medium';
  })
});
