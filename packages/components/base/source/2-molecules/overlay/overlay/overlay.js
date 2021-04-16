import { Component } from '@rm-frontend/core';
import { fadeIn, fadeOut } from '../../../0-base/1-tools/js/fade';
import body from '../../../0-base/2-generic/root/body';

export default class Overlay extends Component {
  static identifier = 'base.overlay';

  static actions = {
    open: `${Overlay.identifier}.open`,
    close: `${Overlay.identifier}.close`,
  };

  constructor(
    element,
    options = {
      fadeInDuration: 400,
      fadeOutDuration: 200,
    }
  ) {
    super(element);

    this.fadeInDuration = options.fadeInDuration;
    this.fadeOutDuration = options.fadeOutDuration;
    this.closeButton = this.element.querySelector('.overlay__close');

    if (element.hasAttribute('data-close-on-bg-click')) {
      this.content = element.querySelector('.overlay__content > *');
    }
  }

  open() {
    this.oldFocussedElement = document.activeElement;
    this.element.addEventListener('keydown', this);
    this.element.addEventListener('click', this);
    body.lock();
    this.element.removeAttribute('hidden');
    fadeIn(this.element, this.fadeInDuration).then(() => this.afterOpen());
    this.element.focus();
  }

  // eslint-disable-next-line class-methods-use-this
  afterOpen() {}

  close() {
    this.element.removeEventListener('keydown', this);
    this.element.removeEventListener('click', this);
    body.reset();
    fadeOut(this.element, this.fadeOutDuration).then(() => this.afterClose());
  }

  afterClose() {
    this.element.setAttribute('hidden', '');

    if (this.oldFocussedElement) {
      this.oldFocussedElement.focus();
    }
  }

  onclick(event) {
    if (
      this.closeButton.contains(event.target) ||
      (this.content && !this.content.contains(event.target))
    ) {
      this.close();
    }
  }

  onkeydown(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }
}
