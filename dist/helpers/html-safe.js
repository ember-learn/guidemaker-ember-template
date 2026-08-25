import { helper } from '@ember/component/helper';
import { htmlSafe as htmlSafe$1 } from '@ember/template';
import sanitizeHtml from 'sanitize-html';

/* eslint-disable prettier/prettier */
function htmlSafeHelper(params) {
  return htmlSafe$1(sanitizeHtml(params.join(''), {
    disallowedTagsMode: 'escape',
    parser: {
      lowerCaseTags: false
    }
  }));
}
var htmlSafe = helper(htmlSafeHelper);

export { htmlSafe as default, htmlSafeHelper };
//# sourceMappingURL=html-safe.js.map
