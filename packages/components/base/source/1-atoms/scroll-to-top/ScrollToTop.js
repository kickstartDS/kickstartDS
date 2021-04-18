import { Component } from '@kickstartds/core/lib/core';
import breakpoints, {
  events as breakpointEvents,
} from '../../0-base/1-tools/js/breakpoints';
import { fadeIn, fadeOut } from '../../0-base/1-tools/js/fade';
import { events as windowEvents } from '../../0-base/2-generic/window/window';

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
