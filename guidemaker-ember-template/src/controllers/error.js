/* eslint-disable ember/no-classic-classes, ember/require-computed-property-dependencies, prettier/prettier */
import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  hasErrors: computed('model.errors.0.status', function() {
    if (!this.model || !Array.isArray(this.model.errors) || this.model.errors.length) {
      // if there is no error field, skip this
      return;
    }
    let errors = this.model.errors.firstObject.status;
    return errors.contains("404") || errors.contains("403");
  })
});
