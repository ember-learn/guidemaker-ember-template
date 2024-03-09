/* eslint-disable prettier/prettier */
import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';
import sanitizeHtml from 'sanitize-html';

export function htmlSafeHelper(params) {
  return htmlSafe(sanitizeHtml(params.join(''), {
    disallowedTagsMode: 'escape',
    parser: {
      lowerCaseTags: false,
    }
  }));
}

export default helper(htmlSafeHelper);
