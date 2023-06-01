import { helper } from '@ember/component/helper';

export default helper(function startsWith([beginning, fullString]) {
  if (!fullString) {
    return false;
  }
  return fullString.startsWith(beginning);
});
