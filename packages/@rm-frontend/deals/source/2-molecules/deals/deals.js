import { Component } from '@rm-frontend/core';
import Overlay from '@rm-frontend/base/source/2-molecules/overlay/overlay/overlay';

export default class Deals extends Component {
  static identifier = 'deals.deals';

  constructor(element) {
    super(element);
    const dealLink = element.querySelector('.deals__button button');
    this.overlay = element.querySelector('.overlay');

    if (dealLink && this.overlay) {
      dealLink.addEventListener('click', this);
    }
  }

  onclick(event) {
    event.preventDefault();
    window.rm.radio.emit(Overlay.actions.open, { element: this.overlay });
  }
}
