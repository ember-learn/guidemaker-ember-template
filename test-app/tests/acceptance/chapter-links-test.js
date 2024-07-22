/* eslint-disable prettier/prettier */
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, find, click } from '@ember/test-helpers';

const PREV_LINK_TEXTS = [
  null,
  'Guides',
  'Introduction',
  'Editing',
  'Introduction',
  'Page 1',
  'Introduction',
  'Page 2',
  'Page 3',
  'Basic Markdown',
  'Code Syntax Highlighting',
  'Callouts',
  'Video',
];

const NEXT_LINK_TEXTS = [
  "We've finished covering Guides and Tutorials. Next up: Getting Started - Introduction",
  'Editing',
  "We've finished covering Getting Started. Next up: Another Section - Introduction",
  'Page 1',
  'Subsection - Introduction',
  'Page 2',
  "We've finished covering Subsection. Next up: Another Section - Page 3",
  "We've finished covering Another Section. Next up: Examples - Basic Markdown",
  'Code Syntax Highlighting',
  'Callouts',
  'Video',
  "We've finished covering Examples. Next up: Guide test - Sidebar stress test",
  null,
];

module('Acceptance | chapter-links', function (hooks) {
  setupApplicationTest(hooks);

  test('chapter links are correct', async function (assert) {
    await visit('/release');

    let index = 0;
    while (index >= 0) {
      const prevLink = find('.prev-guide');
      const nextLink = find('.next-guide');

      if (prevLink) {
        assert.dom('.previous-guide').hasText(PREV_LINK_TEXTS[index]);
      }
      if (nextLink) {
        assert.dom('.next-guide').hasText(NEXT_LINK_TEXTS[index]);
      }

      index++;
      if (nextLink) {
        await click(nextLink);
      } else {
        break;
      }
    }
  });
});
