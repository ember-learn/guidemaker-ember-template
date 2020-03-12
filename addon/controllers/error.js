import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  hasErrors: computed('model.errors.0.status', function() {
    let errors = this.model.errors.firstObject.status;
    return errors.contains("404") || errors.contains("403");
  })
});
