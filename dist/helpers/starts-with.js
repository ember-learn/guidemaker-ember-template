import { helper } from '@ember/component/helper';

var startsWith = helper(function startsWith([beginning, fullString]) {
  if (!fullString) {
    return false;
  }
  return fullString.startsWith(beginning);
});

export { startsWith as default };
//# sourceMappingURL=starts-with.js.map
