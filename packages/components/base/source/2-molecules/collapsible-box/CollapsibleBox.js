import { Component } from '@kickstartds/core/lib/core';
import { slideDown, slideUp } from '../../0-base/1-tools/js/slide';
import { events as windowEvents } from '../../0-base/2-generic/window/window';
import { identifier } from './CollapsibleBox.desc';

export default class CollapsibleBox extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);

    this.details = element.querySelector('details');
    this.trigger = element.querySelector('.collapsible-box__header');
    this.content = element.querySelector('.collapsible-box__content');

    this.trigger.addEventListener('click', this);
    window.rm.radio.on(windowEvents.hashchange, () => {
      this.openFromHash();
    });

    this.openFromHash();
  }

  get isOpen() {
    return this.details.hasAttribute('open');
  }

  onclick(event) {
    event.preventDefault();

    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  openFromHash() {
    const hash = window.location.hash.slice(1);
    if (hash && hash === this.element.id && !this.isOpen) {
      this.open();
    }
  }

  open() {
    this.content.style.height = 0;
    this.details.setAttribute('open', '');
    slideDown(this.content).then(() => {
      this.element.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
    window.history.replaceState(null, '', `#${this.element.id}`);
  }

  close() {
    slideUp(this.content).then(() => this.details.removeAttribute('open'));
  }
}
