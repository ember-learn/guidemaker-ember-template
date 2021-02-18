[![This project uses GitHub Actions for continuous integration.](https://github.com/ember-learn/guidemaker-ember-template/workflows/CI/badge.svg)](https://github.com/ember-learn/guidemaker-ember-template/actions?query=workflow%3ACI)
[![This project uses Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Ember/guidemaker-ember-template)

guidemaker-ember-template
==============================================================================

This addon provides the general layout and some styles that are used for
[guides.emberjs.com](https://guides.emberjs.com/release).

Its responsibilities include:
- CSS for the sidebar
- HTML markup specifics (i.e. the classes that go on various divs in the text of the
guide itself)

## Related apps

Most aspects of the Guides are styled via
[ember-styleguide](https://github.com/ember-learn/ember-styleguide),
not this repository.

[guidemaker](https://github.com/empress/guidemaker) is what
assembles guides content into queryable records.

[guides-source](https://github.com/ember-learn/guides-source)
has the learning content itself.

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install guidemaker-ember-template
```


Usage
------------------------------------------------------------------------------

See [guides-source](https://github.com/ember-learn/guides-source)
for an example of how to use this addon.


Contributing
------------------------------------------------------------------------------

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

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
