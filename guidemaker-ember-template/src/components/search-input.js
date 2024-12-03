import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { task, timeout } from 'ember-concurrency';
import config from 'ember-get-config';

const SEARCH_DEBOUNCE_PERIOD = 300;
const SEARCH_CLOSE_PERIOD = 200;

export default class SearchInputComponent extends Component {
  @service('search') searchService;

  _resultTetherConstraints = [
    {
      to: 'window',
      pin: ['left', 'right'],
    },
  ];

  @tracked _focused = false;
  @tracked query;
  @tracked value = '';

  get deprecationsGuideURL() {
    return config['deprecationsGuideURL'];
  }

  get showDropdown() {
    return this.query && this._focused;
  }

  search = task({ restartable: true }, async (query) => {
    await timeout(SEARCH_DEBOUNCE_PERIOD);

    this.query = query;

    // Hide and don't run query if there's no search query
    if (!query) {
      return (this._focused = false);
    }

    // ensure search results are visible if the menu was previously closed above
    this._focused = true;

    await this.searchService.search.perform(query, this.args.projectVersion);
  });

  closeMenu = task(async () => {
    await timeout(SEARCH_CLOSE_PERIOD);

    this._focused = false;
  });

  @action
  onfocus() {
    this._focused = true;
  }
}
