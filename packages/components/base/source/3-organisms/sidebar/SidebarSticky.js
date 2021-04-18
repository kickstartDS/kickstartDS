import stickybits from 'stickybits';
import { Component } from '@kickstartds/core/lib/core';

export default class SidebarSticky extends Component {
  static identifier = 'base.sidebar-sticky';

  constructor(element) {
    super(element);

    const stickyElement = element.lastElementChild;
    const hasContactForm = stickyElement.querySelector('.contact');
    if (!hasContactForm) return;

    element.closest('.template').style.overflow = 'visible';
    const headerHeight = document.querySelector('.main-header').clientHeight;
    const stickyStyle = window.getComputedStyle(stickyElement);
    const paddingTop = parseInt(
      stickyStyle.getPropertyValue('padding-top'),
      10
    );

    stickybits(stickyElement, {
      stickyBitStickyOffset: headerHeight - paddingTop,
    });
  }
}
