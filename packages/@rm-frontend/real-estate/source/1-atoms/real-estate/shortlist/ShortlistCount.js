import { Component } from '@rm-frontend/core';
import shortlist from './shortlist';

export default class ShortlistCount extends Component {
  static identifier = 'real-estate.shortlist-count';

  constructor(element) {
    super(element);

    element.textContent = shortlist.size;

    window.rm.radio.on(shortlist.events.update, (_, ids) => {
      element.textContent = ids.size;
    });
  }
}
