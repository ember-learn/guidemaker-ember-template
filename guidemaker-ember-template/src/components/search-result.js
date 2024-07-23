import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class SearchResultComponent extends Component {
  @service page;

  get sectionTitle() {
    let sectionId = this.args.result.path.split('/')[0];

    let section = this.page.pages.find((page) => page.id === sectionId);
    return section.title;
  }

  get remainingHeadings() {
    return this.args.result._highlightResult.headings;
  }
}
