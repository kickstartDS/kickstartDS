import { Component } from '@kickstartds/core/lib/core';

export default class NavSidebar extends Component {
  static identifier = 'base.nav-sidebar';

  constructor(element) {
    super(element);

    const searchOverlayTrigger = this.element.querySelector('.nav-item-search');
    if (searchOverlayTrigger) {
      searchOverlayTrigger.addEventListener('click', this);
    }

    this.copyMetaNav();
  }

  // eslint-disable-next-line class-methods-use-this
  onclick(event) {
    event.preventDefault();
    window.rm.radio.emit('search.overlay.open');
  }

  copyMetaNav() {
    const metaNav = document.querySelector('#nav-meta__contact');
    if (metaNav) {
      const metaNavMobile = document.createElement('ul');
      metaNavMobile.classList.add('nav-sidebar__list--level-1');
      metaNav.querySelectorAll('li').forEach((metaNavItem) => {
        const metaNavItemClone = metaNavItem.cloneNode(true);
        const metaNavItemCloneLink = metaNavItemClone.querySelector('a');
        metaNavItemClone.classList.add('nav-sidebar__item');
        metaNavItemClone.classList.add('nav-sidebar__item--level-1');
        metaNavItemClone.classList.add('nav-sidebar__item--meta-item');
        metaNavItemCloneLink.classList.add('nav-sidebar__item__link');
        metaNavMobile.appendChild(metaNavItemClone);
      });
      this.element.appendChild(metaNavMobile);
    }
  }
}
