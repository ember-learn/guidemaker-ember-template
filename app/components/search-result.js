/* eslint-disable ember/no-classic-components, ember/no-classic-classes, ember/require-tagless-components, ember/require-computed-property-dependencies, prettier/prettier, ember/require-computed-macros */
import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNames: ['ds-suggestion'],

  page: service(),
  sectionTitle: computed('result.path', function() {
    let sectionId = this.result.path.split('/')[0];

    let section = this.page.pages.find((page) => page.id === sectionId);
    return section.title;
  }),

  pageHeading: computed('result._highlightResult.headings.[]', function() {
    return this.result._highlightResult.headings[0];
  }),

  remainingHeadings: computed('result._highlightResult.headings.[]', function() {
    return this.result._highlightResult.headings;
  })
});
