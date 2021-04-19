import { Component } from '@kickstartds/core/lib/core';

export default class Dropdown extends Component {
  static identifier = 'base.dropdown';

  static events = {
    toggle: `${Dropdown}.toggled`,
  };

  static actions = {
    close: `${Dropdown.identifier}.close`,
  };

  constructor(element) {
    super(element);

    this.details = element.querySelector('details');

    this.element.setAttribute('tabindex', '-1');

    this.details.addEventListener('toggle', this);

    if (typeof element.dataset.openOnHover !== 'undefined') {
      element.addEventListener('mouseenter', this);
      element.addEventListener('mouseleave', this);
    }
  }

  ontoggle(event) {
    window.rm.radio.emit(Dropdown.events.toggle, { event, component: this });

    if (this.isOpen) {
      window.addEventListener('keydown', this);
    } else {
      window.removeEventListener('keydown', this);
    }
  }

  onkeydown(event) {
    if (event.key === 'Escape') {
      window.removeEventListener('keydown', this);
      this.close();
    }
  }

  onmouseenter() {
    requestAnimationFrame(() => {
      this.open();
    });
  }

  onmouseleave() {
    this.close();
  }

  get isOpen() {
    return this.details.hasAttribute('open');
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.details.setAttribute('open', '');
  }

  close() {
    this.details.removeAttribute('open');
  }
}

document.addEventListener('focusout', (event) => {
  let dropdown = event.target;

  while (dropdown) {
    dropdown = dropdown.closest('[data-close-on-blur]');
    if (dropdown) {
      if (!dropdown.contains(event.relatedTarget)) {
        window.rm.radio.emit(`${dropdown.dataset.component}.close`, {
          element: dropdown,
        });
      }
      dropdown = dropdown.parentElement;
    }
  }
});
