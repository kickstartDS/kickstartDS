import { Component } from '@kickstartds/core/lib/core';

export default class NavLang extends Component {
  static identifier = 'base.nav-lang';

  constructor(element) {
    super(element);
    this.copy();
  }

  copy() {
    const clone = this.element.cloneNode(true);
    clone.classList.remove('nav-lang--desktop');
    clone.classList.add('nav-lang--mobile');
    clone.removeAttribute('data-component');
    clone
      .querySelectorAll('[data-uid]')
      .forEach((node) => node.removeAttribute('data-uid'));

    const parent = document.querySelector(
      '.main-header__logo-nav, .main-header-sidebar .l-main-wrap'
    );
    parent.insertBefore(clone, parent.firstappendChild);
  }
}
