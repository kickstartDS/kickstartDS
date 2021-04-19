import { Component } from '@kickstartds/core/lib/core';
import breakpoints, {
  events as breakpointEvents,
} from '../../../0-base/1-tools/js/breakpoints';
import { events as windowEvents } from '../../../0-base/2-generic/window/window';
import Dropdown from '../../dropdown/Dropdown';

export default class NavMain extends Component {
  static identifier = 'base.nav-main';

  constructor(element) {
    super(element);

    const allDropdowns = this.element.querySelectorAll('details');
    const tokens = new WeakMap();
    this.activeItem = this.element.querySelector(
      '.nav-main__item--level-1.nav-main__item--active'
    );

    window.rm.radio.on(Dropdown.events.toggle, (msg, { component }) => {
      if (this.element.contains(component.element)) {
        if (component.isOpen) {
          NavMain.setDropdownPosition(component.element);
          tokens.set(
            component,
            window.rm.radio.on(windowEvents.resize, () =>
              NavMain.setDropdownPosition(component.element)
            )
          );
        } else {
          window.rm.radio.off(tokens.get(component));
        }
      }
    });

    const searchOverlayTrigger = this.element.querySelector('.nav-item-search');
    if (searchOverlayTrigger) {
      searchOverlayTrigger.addEventListener('click', this);
    }

    window.rm.radio.on(breakpointEvents.change, () => {
      if (breakpoints.lessThan('nav-main')) {
        this.openActiveDropdown();
      } else {
        allDropdowns.forEach((dropdown) => dropdown.removeAttribute('open'));
      }
    });

    this.copyMetaNav();
    this.copyFooterNav();
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
      metaNavMobile.classList.add('nav-main__list--level-1');
      metaNav.querySelectorAll('li').forEach((metaNavItem) => {
        const metaNavItemClone = metaNavItem.cloneNode(true);
        const metaNavItemCloneLink = metaNavItemClone.querySelector('a');
        metaNavItemClone.classList.add('nav-main__item');
        metaNavItemClone.classList.add('nav-main__item--level-1');
        metaNavItemClone.classList.add('nav-main__item--meta-item');
        metaNavItemCloneLink.classList.add('nav-main__item__link');
        metaNavMobile.appendChild(metaNavItemClone);
      });
      this.element.appendChild(metaNavMobile);
    }
  }

  copyFooterNav() {
    const footerNav = document.querySelector('.nav-footer__list');
    if (footerNav) {
      const footerNavMobile = document.createElement('ul');
      footerNavMobile.classList.add('nav-main__list--level-1');
      footerNav.querySelectorAll('li').forEach((footerNavItem) => {
        const footerNavItemClone = footerNavItem.cloneNode(true);
        const footerNavItemCloneLink = footerNavItemClone.querySelector('a');
        footerNavItemClone.classList.remove('nav-footer__list__item');
        footerNavItemClone.classList.add('nav-main__item');
        footerNavItemClone.classList.add('nav-main__item--level-1');
        footerNavItemClone.classList.add('nav-main__item--footer-item');
        footerNavItemCloneLink.classList.add('nav-main__item__link');
        footerNavMobile.appendChild(footerNavItemClone);
      });
      this.element.appendChild(footerNavMobile);
    }
  }

  openActiveDropdown() {
    if (this.activeItem) {
      const dropdown = this.activeItem.querySelector('details');
      if (dropdown) {
        dropdown.setAttribute('open', '');
      }
    }
  }

  static setDropdownPosition(dropdown) {
    const windowWidth = window.innerWidth;
    const dropdownPosLeft =
      dropdown.getBoundingClientRect().left + document.body.scrollLeft;
    const freeSpace = windowWidth - dropdownPosLeft;

    const dropdownBody = dropdown.querySelector('.nav-main__list--level-2');
    if (freeSpace < 300) {
      dropdownBody.classList.add('nav-main__list--rtl');
    } else {
      dropdownBody.classList.remove('nav-main__list--rtl');
    }

    const subNavs = dropdown.querySelectorAll('.nav-main__list--level-3');
    if (subNavs.length) {
      if (freeSpace < 520) {
        subNavs.forEach((subNav) =>
          subNav.classList.add('nav-main__list--rtl')
        );
      } else {
        subNavs.forEach((subNav) =>
          subNav.classList.remove('nav-main__list--rtl')
        );
      }
    }
  }
}
