import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, find } from '@ember/test-helpers';

module('Acceptance | chapter-links', function(hooks) {
  setupApplicationTest(hooks);

  test('chapter links are correct', async function(assert) {
    await visit('/v1.2.0');

    let prevLinkTexts = [];
    let nextLinkTexts = [];

    // eslint-disable-next-line no-constant-condition
    while (true) {
      let prevLink = find('.previous-guide');
      let nextLink = find('.next-guide');

      prevLinkTexts.push(prevLink && prevLink.textContent.trim());
      nextLinkTexts.push(nextLink && nextLink.textContent.trim());

      if (nextLink) {
        await visit(nextLink.attributes.href.value);
      } else {
        break;
      }
    }

    assert.deepEqual(
      prevLinkTexts,
      [null, 'Guides', 'Introduction', 'Editing', 'Page 1', 'Page 2'],
      'previous link texts were correct'
    );
    assert.deepEqual(
      nextLinkTexts,
      [
        "We've finished covering Guides and Tutorials. Next up: Getting Started - Introduction",
        'Editing',
        "We've finished covering Getting Started. Next up: Another Section - Page 1",
        'Subsection - Page 2',
        "We've finished covering Subsection. Next up: Another Section - Page 3",
        null,
      ],
      'next link texts were correct'
    );
  });
});
