import { helper } from "@ember/component/helper";

export function includes([collection, item] /*, hash*/) {
  return (collection || []).includes(item);
}

export default helper(includes);
