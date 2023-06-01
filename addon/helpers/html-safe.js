/* eslint-disable prettier/prettier */
import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function htmlSafeHelper(params) {
  return htmlSafe(params.join(''))
}

export default helper(htmlSafeHelper);
