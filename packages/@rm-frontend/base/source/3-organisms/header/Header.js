import { Component } from '@rm-frontend/core';
import breakpoints from '../../0-base/1-tools/js/breakpoints';
import { events as windowEvents } from '../../0-base/2-generic/window/window';

export default class Header extends Component {
  static identifier = 'base.header';

  constructor(element) {
    super(element);

    this.logoImage = this.element.querySelector('img[itemprop="logo"]');
    this.logoImageSrc = this.logoImage.dataset.src;
    this.logoImageSrcInitial = this.logoImage.getAttribute('src');
    this.skipToNav = document.querySelector('.nav-skip__link[href*="#nav"]');
    this.skipToNavTarget = this.skipToNav.getAttribute('data-nav');
    this.isVariant2 = this.element.classList.contains('main-header--variant-2');
    this.tokens = {};

    window.rm.radio.on(windowEvents.resize, () => {
      this.resizeHandler();
    });

    this.resizeHandler();
  }

  resizeHandler() {
    this.changeHeaderonScoll();
    this.updateSkipLinks();
  }

  // Change header in default templates
  changeHeader() {
    const currentScrollPosition = window.pageYOffset;

    requestAnimationFrame(() => {
      if (this.isVariant2) {
        if (currentScrollPosition > 250) {
          document.body.classList.add('header-is-scrolling');
        } else if (currentScrollPosition === 0) {
          document.body.classList.remove('header-is-scrolling');
        }
      } else if (currentScrollPosition > 80) {
        document.body.classList.add('header-is-scrolling');
        this.logoImage.setAttribute('src', this.logoImageSrc);
      } else {
        document.body.classList.remove('header-is-scrolling');
        this.logoImage.setAttribute('src', this.logoImageSrcInitial);
      }
    });
  }

  changeHeaderonScoll() {
    if (!this.tokens.scrollHeader) {
      this.tokens.scrollHeader = window.rm.radio.on(windowEvents.scroll, () =>
        this.changeHeader()
      );
    }
  }

  updateSkipLinks() {
    this.skipToNav.setAttribute(
      'href',
      window.location.href.split('#')[0] +
        (breakpoints.lessThan('nav-main')
          ? '#toggle-sidebar'
          : `#nav-${this.skipToNavTarget}`)
    );
  }
}
