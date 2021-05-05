import { Component } from '@kickstartds/core/lib/core';
import {
  windowEvents,
  breakpoints,
  breakpointEvents,
} from '@kickstartds/core/lib/utils';
import { fadeIn, fadeOut } from '../../0-base/1-tools/js/fade';

export default class ScrollToTop extends Component {
  static identifier = 'base.scroll-to-top';

  constructor(element) {
    super(element);

    window.rm.radio.on(breakpointEvents.change, () =>
      this.checkScrollPosition()
    );

    this.checkScrollPosition();
  }

  checkScrollPosition() {
    if (breakpoints.greaterThan('s')) {
      if (!this.scrollToken) {
        this.scrollToken = window.rm.radio.on(windowEvents.scroll, () =>
          this.scrollHandler()
        );
      }
      this.scrollHandler();
    } else {
      window.rm.radio.off(this.scrollToken);
      delete this.scrollToken;
      this.element.style.removeProperty('display');
    }
  }

  scrollHandler() {
    if (window.pageYOffset > 200) {
      fadeIn(this.element);
    } else {
      fadeOut(this.element);
    }
  }
}
