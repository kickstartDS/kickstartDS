import { Component } from '@rm-frontend/core';
import breakpoints, {
  events as breakpointEvents,
} from '@rm-frontend/base/source/0-base/1-tools/js/breakpoints';
import DateRangePicker from '@rm-frontend/base/source/2-molecules/date-range-picker/DateRangePicker';
import Overlay from '@rm-frontend/base/source/2-molecules/overlay/overlay/overlay';

export default class RealEstateActions extends Component {
  static identifier = 'real-estate.actions';

  constructor(element) {
    super(element);
    const triggerBtn = element.querySelector(
      '.real-estate-actions__btn--trigger'
    );
    const submitBtn = element.querySelector(
      '.real-estate-actions__btn--submit'
    );

    this.overlayElement = element.querySelector('.overlay');

    if (triggerBtn) {
      triggerBtn.addEventListener('click', this);

      window.rm.radio.on(breakpointEvents.change, () => {
        if (breakpoints.greaterThan('m')) {
          window.rm.radio.emit(Overlay.actions.close);
        }
      });
    }

    window.rm.radio.on(DateRangePicker.events.validRange, () => {
      submitBtn.disabled = false;
    });

    window.rm.radio.on(DateRangePicker.events.invalidRange, () => {
      submitBtn.disabled = true;
    });
  }

  onclick(event) {
    event.preventDefault();
    if (this.overlayElement.style.display === 'block') {
      window.rm.radio.emit(Overlay.actions.close);
    } else {
      window.rm.radio.emit(Overlay.actions.open);
    }
  }
}
