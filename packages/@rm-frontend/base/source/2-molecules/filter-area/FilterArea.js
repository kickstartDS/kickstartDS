import { Component } from '@rm-frontend/core';
import breakpoints, {
  events as breakpointEvents,
} from '../../0-base/1-tools/js/breakpoints';
import { slideDown, slideUp } from '../../0-base/1-tools/js/slide';

export default class FilterArea extends Component {
  static identifier = 'base.filter-area';

  constructor(element) {
    super(element);

    this.toggleBtn = element.querySelector('.filter-area__toggle');
    this.content = this.toggleBtn.nextElementSibling;

    this.toggleBtn.addEventListener('click', this);
    window.rm.radio.on(breakpointEvents.change, () => {
      this.showFilter();
    });
    this.showFilter();
  }

  onclick(event) {
    event.preventDefault();

    if (this.element.hasAttribute('open')) {
      this.slideClose();
    } else {
      this.slideOpen();
    }
  }

  slideOpen() {
    this.content.style.height = 0;
    this.element.classList.add('filter-area--open');
    this.element.setAttribute('open', '');
    slideDown(this.content);
  }

  slideClose() {
    this.element.classList.remove('filter-area--open');
    slideUp(this.content).then(() => {
      this.element.removeAttribute('open');
    });
  }

  forceOpen() {
    this.element.setAttribute('open', '');
    this.content.removeAttribute('style');
    this.element.classList.add('filter-area--open');
  }

  showFilter() {
    if (breakpoints.greaterThan('m')) {
      this.forceOpen();
    }
  }
}
