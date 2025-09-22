import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default class ErrorController extends Controller {
  @computed(
    'model.errors.0.status',
    'model.errors.firstObject.status',
    'model.errors.length',
  )
  get hasErrors() {
    if (
      !this.model ||
      !Array.isArray(this.model.errors) ||
      this.model.errors.length
    ) {
      // if there is no error field, skip this
      return;
    }
    let errors = this.model.errors.firstObject.status;
    return errors.contains('404') || errors.contains('403');
  }
}
