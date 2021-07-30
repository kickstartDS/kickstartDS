import { Component } from '@kickstartds/core/component';

export default class NumberInput extends Component {
  static identifier = 'base.number-input';

  constructor(element) {
    super(element);

    this.dec = element.querySelector('.number-input__button--dec');
    this.inc = element.querySelector('.number-input__button--inc');
    this.input = element.querySelector('.number-input__input');

    this.min = Number(this.input.getAttribute('min'));
    this.max = Number(this.input.getAttribute('max'));

    this.element.addEventListener('click', this);
    this.updateButtons();

    this.changeEvent = document.createEvent('Event');
    this.changeEvent.initEvent('change', true, true);
  }

  get value() {
    return Number(this.input.value);
  }

  set value(newValue) {
    this.input.value = newValue;

    this.input.dispatchEvent(this.changeEvent);

    this.updateButtons();
  }

  onclick(event) {
    if (event.target === this.dec) {
      this.value -= 1;
    } else if (event.target === this.inc) {
      this.value += 1;
    }
  }

  updateButtons() {
    this.inc.disabled = this.input.value >= this.max;
    this.dec.disabled = this.input.value <= this.min;
  }
}
