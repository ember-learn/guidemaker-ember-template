import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Helper | includes", function(hooks) {
  setupRenderingTest(hooks);

  test("it returns true if the collection contains the item", async function(assert) {
    this.set("collection", [1, 2, 3, 4]);
    this.set("item", 2);

    await render(hbs`{{if (includes collection item) 'yes' 'no'}}`);
    assert.dom(this.element).hasText("yes");
  });

  test("it returns false if the collection is null", async function(assert) {
    this.set("collection", null);
    this.set("item", 2);

    await render(hbs`{{if (includes collection item) 'yes' 'no'}}`);
    assert.dom(this.element).hasText("no");
  });

  test("it returns false if the collection is undefined", async function(assert) {
    this.set("collection", undefined);
    this.set("item", 2);

    await render(hbs`{{if (includes collection item) 'yes' 'no'}}`);
    assert.dom(this.element).hasText("no");
  });
});
