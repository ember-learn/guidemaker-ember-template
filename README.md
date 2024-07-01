# guidemaker-ember-template

This addon provides the general layout and some styles that are used for
[guides.emberjs.com](https://guides.emberjs.com/release).

Its responsibilities include
- CSS for the sidebar
- HTML markup specifics (i.e. the classes that go on various divs in the text of the guide itself)

## Related apps

Most aspects of the Guides are styled via [ember-styleguide](https://github.com/ember-learn/ember-styleguide),not this repository.

[guidemaker](https://github.com/empress/guidemaker) is what assembles guides content into queryable records.

[guides-source](https://github.com/ember-learn/guides-source) has the learning content itself.

## Compatibility
- Ember.js v4.12 or above
- Embroider or ember-auto-import v2

## Installation
- `git clone <repository-url>`
- `cd guidemaker-ember-template`
- `pnpm install`

## Linting
- `pnpm lint`
- `pnpm lint:fix`

## Building the addon
- `cd guidemaker-ember-template`
- `pnpm build`

## Running tests
- `cd test-app`
- `pnpm test` – Runs the test suite on the current Ember version
- `pnpm test:watch` – Runs the test suite in "watch mode"

## Running the test application
- `cd test-app`
- `pnpm start`
- Visit the test application at [http://localhost:4200](http://localhost:4200).

## Usage
See [guides-source](https://github.com/ember-learn/guides-source) for an example of how to use this addon.

[Longer description of how to use the addon in apps.]

## Contributing
See the [Contributing](CONTRIBUTING.md) guide for details.

Releases
------------------------------------------------------------------------------

To release a new version of this addon:

```
git checkout master
git pull origin master
npm install -g np
np
```

This command will run checks and tests, and ask you what version you want
to do the release as (major, minor, patch).

## License

This project is licensed under the [MIT License](LICENSE.md).
