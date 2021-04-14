import FilterArea from '@rm-frontend/base/source/2-molecules/filter-area/FilterArea';

export default class SearchFilter extends FilterArea {
  static identifier = 'search.filter';

  showFilter() {
    super.showFilter();

    if (this.element.querySelector('.search__faceting__in-use')) {
      this.forceOpen();
    }
  }
}
