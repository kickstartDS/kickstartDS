import Overlay from '@rm-frontend/base/source/2-molecules/overlay/overlay/overlay';
import SearchFrom from '../../../2-molecules/search/search-form/SearchForm';

export default class SearchOverlay extends Overlay {
  static identifier = 'search.overlay';

  static actions = {
    open: `${SearchOverlay.identifier}.open`,
  };

  constructor(element) {
    super(element, {
      fadeInDuration: 300,
      fadeOutDuration: 300,
    });
  }

  afterOpen() {
    super.afterOpen();
    window.rm.radio.emit(SearchFrom.actions.focusSearchInput);
  }

  keyHandler(event) {
    super.keyHandler(event);

    if (!(event.key in ['Tab', 'Shift'])) {
      window.rm.radio.emit(SearchFrom.actions.focusSearchInput);
    }
  }
}
