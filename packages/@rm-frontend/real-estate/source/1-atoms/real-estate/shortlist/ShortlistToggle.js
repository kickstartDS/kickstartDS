import { Component } from '@rm-frontend/core';
import { fadeOut } from '@rm-frontend/base/source/0-base/1-tools/js/fade';
import shortlist from './shortlist';

export default class ShortlistToggle extends Component {
  static identifier = 'real-estate.shortlist-toggle';

  constructor(element) {
    super(element);

    this.parent = element.closest('[data-estate-id]');

    if (this.parent) {
      this.id = this.parent.getAttribute('data-estate-id');
      // #if env.NODE_ENV !== 'production'
    } else {
      // eslint-disable-next-line no-console
      console.error(
        'ShortlistToggle needs a parent element with "data-estate-id"-attribute',
        element
      );
      // #endif
    }

    if (this.id) {
      this.active = shortlist.has(this.id);
      element.addEventListener('click', this);
      window.rm.radio.on(shortlist.actions.add, (_, id) => {
        if (id === this.id) {
          this.active = true;
        }
      });
      window.rm.radio.on(shortlist.actions.remove, (_, id) => {
        if (id === this.id) {
          this.active = false;
        }
      });
      // #if env.NODE_ENV !== 'production'
    } else {
      // eslint-disable-next-line no-console
      console.error('Invalid "data-estate-id"-attribute', this.parent);
      // #endif
    }
  }

  onclick() {
    if (this.active) {
      this.remove();
    } else {
      this.add();
    }
  }

  get active() {
    return this.element.getAttribute('aria-pressed') === 'true';
  }

  set active(value) {
    this.element.setAttribute('aria-pressed', value);
  }

  add() {
    window.rm.radio.emit(shortlist.actions.add, this.id);
    this.active = true;
  }

  remove() {
    window.rm.radio.emit(shortlist.actions.remove, this.id);
    this.active = false;

    if (this.element.closest('.real-estate-cards--shortlist')) {
      this.removeFromDom();
    }
  }

  removeFromDom() {
    this.parent.style.display = 'block';
    fadeOut(this.parent).then(() => {
      this.parent.parentNode.removeChild(this.parent);

      // if the last item was removed, reload the page to show the empty message
      if (shortlist.size === 0) {
        window.location.reload();
      }
    });
  }
}
