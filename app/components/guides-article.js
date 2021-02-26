/* eslint-disable ember/no-classic-components, no-unused-vars, prettier/prettier, ember/no-classic-classes, ember/require-tagless-components, ember/require-computed-property-dependencies */
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

export default Component.extend({
  tagName: 'article',
  classNames: 'chapter',
  page: service(),
  guidemaker: service(),
  editVersion: computed('version', 'currentVersion', function() {
    if(this.page.currentVersion === 'release') {
      return '';
    }

    if(this.version === this.currentVersion) {
      return 'release/'
    }

    return `${this.page.currentVersion}/`;
  }),
});
