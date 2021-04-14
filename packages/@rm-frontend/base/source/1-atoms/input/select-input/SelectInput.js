import { Component } from '@rm-frontend/core';
import { events as breakpointEvents } from '../../../0-base/1-tools/js/breakpoints';

export default class SelectInput extends Component {
  static identifier = 'base.select-input';

  constructor(element) {
    super(element);

    this.select = element.querySelector('.select-field');

    if (element.hasAttribute('data-auto-width')) {
      this.setWidth();
      window.rm.radio.on(breakpointEvents.change, () => this.setWidth());
    }

    if (element.hasAttribute('data-submit')) {
      this.select.addEventListener('change', this);
    }
  }

  /**
   * set the width of the select element to the width of its selected option
   */
  setWidth() {
    const clone = this.select.cloneNode(true);
    clone.style.cssText = 'visibility: hidden; display: block;';

    [...clone.children].forEach((option) => {
      if (!option.selected) {
        clone.removeChild(option);
      }
    });

    if (clone.children.length) {
      const width = this.element.appendChild(clone).offsetWidth;
      this.element.removeChild(clone);
      this.select.style.width = `${width}px`;
    }
  }

  onchange() {
    this.select.form.submit();
  }
}
