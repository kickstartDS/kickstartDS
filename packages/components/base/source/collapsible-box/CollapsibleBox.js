import { Component } from '@kickstartds/core/lib/component';
import { slideDown, slideUp, windowEvents } from '@kickstartds/core/lib/utils';

export default class CollapsibleBox extends Component {
  static identifier = 'base.collapsible-box';

  constructor(element) {
    super(element);

    this.details = element.querySelector('details');
    this.trigger = element.querySelector('.c-collapsible-box__header');
    this.content = element.querySelector('.c-collapsible-box__content');

    this.trigger.addEventListener('click', this);
    const token = window._ks.radio.on(windowEvents.hashchange, () =>
      this.openFromHash()
    );

    this.openFromHash();

    this.onDisconnect(() => {
      this.trigger.removeEventListener('click', this);
      window._ks.radio.off(token);
    });
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
    if (this.element.id) {
      window.history.replaceState(null, '', `#${this.element.id}`);
    }
  }

  close() {
    slideUp(this.content).then(() => this.details.removeAttribute('open'));
  }
}
