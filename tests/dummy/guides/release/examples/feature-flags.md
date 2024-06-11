<div class="classic-component">

This section is only shown when toggling to the classic feature flag.

```js {data-filename=some-component.js}
import Component from '@glimmer/component';

export default class SomeComponent extends Component {
  foo = 'bar';

  someFunction() {
    // do something
  }
}
```

```hbs {data-filename=some-component.hbs}
<div>
  {{this.foo}}
</div>
```

</div>


<div class="template-tag">

This section is only shown in when toggling to the template tag feature flag.

```gjs {data-filename=some-component.gjs}
import Component from '@glimmer/component';

export default class SomeComponent extends Component {
  foo = 'bar';

  someFunction() {
    // do something
  }

  <template>
    <div>
      {{this.foo}}
    </div>
  </template>
}
```

</div>

---

The guides support feature flags by using class names in Markdown.
