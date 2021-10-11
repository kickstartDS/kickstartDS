import { Component } from '@kickstartds/core/lib/core';
import Awesomplete from 'awesomplete';
import { identifier } from './ComboBox.desc';

const defaultConfig = {
  minChars: 0,
  maxItems: Infinity,
  sort: false,
  autoFirst: true,
};

export default class ComboBox extends Component {
  static identifier = identifier;

  constructor(element, config = {}) {
    super(element);

    this.config = { ...defaultConfig, ...config };
    this.input = element.querySelector('input');
    this.init();
  }

  init() {
    this.select = new Awesomplete(this.input, this.config);
    this.input.addEventListener('click', this);
    this.element.addEventListener(
      'awesomplete-selectcomplete',
      this.reset.bind(this)
    );
  }

  onclick() {
    if (this.select.ul.childNodes.length === 0) {
      this.select.evaluate();
    } else if (this.select.opened) {
      this.select.close();
    } else {
      this.select.open();
    }
  }

  reset() {
    const { value } = this.select.input;
    this.select.input.value = '';
    this.select.evaluate();
    this.select.close();
    this.select.input.value = value;
  }
}
