import { helper } from '@ember/component/helper';

export default helper(function startsWith([beginning, fullString]) {
  return fullString.startsWith(beginning);
});
