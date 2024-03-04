import { Component } from '@kickstartds/core/lib/component';

const openClassName = 'c-collapsible-box--open';

export default class CollapsibleBox extends Component {
  static identifier = 'base.collapsible-box';

  constructor(element) {
    super(element);

    this.trigger = element.querySelector('.c-collapsible-box__header');
    this.content = element.querySelector('.c-collapsible-box__content');

    element.addEventListener('toggle', this);
    this.trigger.addEventListener('click', this);
    this.content.addEventListener('transitionend', this);

    this.onDisconnect(() => {
      element.removeEventListener('toggle', this);
      this.trigger.removeEventListener('click', this);
      this.content.removeEventListener('transitionend', this);
    });
  }

  ontoggle() {
    if (this.element.open) {
      window.requestAnimationFrame(() => {
        this.element.classList.add(openClassName);
      });
    }
  }

  onclick(event) {
    event.preventDefault();

    if (this.element.open) {
      this.element.classList.remove(openClassName);
    } else {
      this.element.open = true;
      this.element.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  ontransitionend(event) {
    if (event.target === this.content) {
      if (!this.element.classList.contains(openClassName)) {
        this.element.open = false;
      }
    }
  }
}
