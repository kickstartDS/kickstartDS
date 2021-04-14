import { Component } from '@rm-frontend/core';

const KEYS = {
  prev: 37,
  next: 39,
};
const KEY_VALUES = Object.values(KEYS);

export default class Tabs extends Component {
  static identifier = 'tabs.tabs';

  constructor(element) {
    super(element);

    this.tabs = Array.from(element.querySelectorAll('.tabs__tab'));
    this.panels = element.querySelectorAll('.tabs__panel');

    this.selectedTab = 0;
    this.selectTab(this.selectedTab, false);

    this.element.addEventListener('click', this);
    this.element.addEventListener('keydown', this);
  }

  selectTab(index, userInvoked) {
    // hide all
    this.tabs.forEach((tab) => {
      tab.setAttribute('aria-selected', false);
      tab.setAttribute('tabindex', -1);
    });

    this.panels.forEach((panel) => {
      panel.setAttribute('aria-hidden', true);
      panel.setAttribute('tabindex', -1);
    });

    // show selected
    this.tabs[index].setAttribute('aria-selected', true);
    this.tabs[index].removeAttribute('tabindex');

    this.panels[index].setAttribute('aria-hidden', false);

    if (userInvoked) {
      this.tabs[index].focus();
    }

    this.selectedTab = index;
  }

  onclick(event) {
    const index = this.tabs.indexOf(event.target);
    if (index > -1 && index !== this.selectedTab) {
      event.preventDefault();
      this.selectTab(index, true);
    }
  }

  onkeydown(event) {
    const index = this.tabs.indexOf(event.target);
    if (index > -1 && KEY_VALUES.indexOf(event.keyCode) > -1) {
      event.preventDefault();

      if (event.keyCode === KEYS.prev && index > 0) {
        this.selectTab(index - 1, true);
      } else if (event.keyCode === KEYS.next && index < this.tabs.length - 1) {
        this.selectTab(index + 1, true);
      }
    }
  }
}
