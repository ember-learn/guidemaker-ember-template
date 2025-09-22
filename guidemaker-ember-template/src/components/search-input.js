import { inject as service } from '@ember/service';
import { and } from '@ember/object/computed';
import { getOwner } from '@ember/application';
import Component from '@ember/component';
import { set, action } from '@ember/object';
import { restartableTask, task, timeout } from 'ember-concurrency';

const SEARCH_DEBOUNCE_PERIOD = 300;
const SEARCH_CLOSE_PERIOD = 200;

export default class SearchInput extends Component {
  @service('search')
  searchService;

  _resultTetherConstraints = Object.freeze([
    {
      to: 'window',
      pin: ['left', 'right'],
    },
  ]);

  _focused = false;

  constructor() {
    super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');
    this.deprecationsGuideURL = config['deprecationsGuideURL'];
  }

  @and('query', '_focused')
  showDropdown;

  search = restartableTask(async (query) => {
    await timeout(SEARCH_DEBOUNCE_PERIOD);

    set(this, 'query', query);

    // Hide and don't run query if there's no search query
    if (!query) {
      return set(this, '_focused', false);
    }

    // ensure search results are visible if the menu was previously closed above
    set(this, '_focused', true);

    await this.searchService.search.perform(query, this.projectVersion);
  });

  closeMenu = task(async () => {
    await timeout(SEARCH_CLOSE_PERIOD);

    set(this, '_focused', false);
  });

  @action
  onfocus() {
    set(this, '_focused', true);
  }

  @action
  onblur() {
    this.closeMenu.perform();
  }
}
