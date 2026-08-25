import { computed } from '@ember/object';
import Controller from '@ember/controller';
import { n } from 'decorator-transforms/runtime';

/* eslint-disable ember/no-computed-properties-in-native-classes, ember/use-brace-expansion, getter-return */
class ErrorController extends Controller {
  get hasErrors() {
    if (!this.model || !Array.isArray(this.model.errors) || this.model.errors.length) {
      // if there is no error field, skip this
      return;
    }
    let errors = this.model.errors.firstObject.status;
    return errors.contains('404') || errors.contains('403');
  }
  static {
    n(this.prototype, "hasErrors", [computed('model.errors.0.status', 'model.errors.firstObject.status', 'model.errors.length')]);
  }
}

export { ErrorController as default };
//# sourceMappingURL=error.js.map
