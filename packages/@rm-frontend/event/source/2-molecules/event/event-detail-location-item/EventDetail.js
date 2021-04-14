import { Component } from '@rm-frontend/core';
import {
  slideUp,
  slideDown,
} from '@rm-frontend/base/source/0-base/1-tools/js/slide';

export default class EventDetail extends Component {
  static identifier = 'event.event-detail';

  constructor(element) {
    super(element);

    this.eventShowMap = element.querySelector('.js-event-detail__btn-show-map');
    this.eventHideMap = element.querySelector('.js-event-detail__btn-hide-map');
    this.mapWrapper = element.querySelector('.event-detail__location__map');

    if (this.eventShowMap) {
      this.eventShowMap.addEventListener('click', this);
    }

    if (this.eventHideMap) {
      this.eventHideMap.addEventListener('click', this);
    }
  }

  onclick(event) {
    // eslint-disable-next-line default-case
    switch (event.currentTarget) {
      case this.eventShowMap:
        this.showMap();
        break;

      case this.eventHideMap:
        this.hideMap();
        break;
    }
  }

  showMap() {
    slideDown(this.mapWrapper);

    this.eventShowMap.style.display = 'none';
    this.eventShowMap.nextElementSibling.style.display = 'block';
  }

  hideMap() {
    slideUp(this.mapWrapper);

    this.eventHideMap.style.display = 'none';
    this.eventHideMap.previousElementSibling.style.display = 'block';
  }
}
