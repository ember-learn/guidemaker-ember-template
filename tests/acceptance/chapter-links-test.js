/* eslint-disable prettier/prettier */
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, find } from '@ember/test-helpers';

module('Acceptance | chapter-links', function(hooks) {
  setupApplicationTest(hooks);

  test('chapter links are correct', async function(assert) {
    await visit('/release');

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
      [null, 'Guides', 'Introduction', 'Editing', 'Introduction', 'Page 1', 'Introduction', 'Page 2', 'Page 3','Basic Markdown','Code Syntax Highlighting'],
      'previous link texts were correct'
    );

    assert.deepEqual(
      nextLinkTexts,
      [
        "We've finished covering Guides and Tutorials. Next up: Getting Started - Introduction",
        "Editing",
        "We've finished covering Getting Started. Next up: Another Section - Introduction",
        "Page 1",
        "Subsection - Introduction",
        "Page 2",
        "We've finished covering Subsection. Next up: Another Section - Page 3",
        "We've finished covering Another Section. Next up: Examples - Basic Markdown",
        "Code Syntax Highlighting",
        "Callouts",
        null,
      ],
      'next link texts were correct'
    );
  });
});
