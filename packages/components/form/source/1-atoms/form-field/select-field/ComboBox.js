import { Component, uid } from '@kickstartds/core/lib/core';
import Awesomplete from 'awesomplete';
import { identifier } from './ComboBox.desc';

const { $ } = Awesomplete;

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

    this.fieldWrapper = element.querySelector('.c-form-field__field');
    this.select = this.fieldWrapper.querySelector('select');
    this.initialValue = this.select.value;
    const initialOption = this.select.querySelector(
      `[value="${this.initialValue}"`
    );
    this.placeholder = element.dataset.filterPlaceholder;
    this.initialLabel = this.placeholder
      ? ''
      : (initialOption && initialOption.textContent) || this.initialValue;
    this.input = $.create('input', {
      inside: this.fieldWrapper,
      class: 'c-form-field__input',
      placeholder: this.placeholder,
    });

    this.list = [...this.select.children]
      .filter((option) => !option.disabled)
      .map((option) => ({ label: option.textContent, value: option.value }));

    this.config = {
      ...defaultConfig,
      list: this.list,
      replace: (option) => {
        this.input.value = option.label;
        this.select.value = option.value;
      },
      ...config,
    };

    this.init();
  }

  init() {
    this.select.setAttribute('tabindex', -1);

    const inputId = uid();
    this.input.value = this.initialLabel;
    this.input.id = inputId;
    this.element.setAttribute('for', inputId);

    this.combo = new Awesomplete(this.input, this.config);
    this.reset();

    this.input.addEventListener('click', this);
    this.input.addEventListener('blur', this);
    this.select.addEventListener('focus', this);
  }

  onclick() {
    if (this.combo.ul.childNodes.length === 0) {
      this.combo.evaluate();
    } else if (this.combo.opened) {
      this.combo.close();
    } else {
      this.combo.open();
    }
  }

  onblur() {
    const valueRegex = RegExp(
      `^${$.regExpEscape(this.input.value.trim())}$`,
      'i'
    );
    const foundOption = this.list.find(({ value }) => valueRegex.test(value));

    if (foundOption) {
      this.select.value = foundOption.value;
      this.input.value = foundOption.label;
    } else {
      this.select.value = this.initialValue;
      this.input.value = this.initialLabel;
    }

    this.reset();
  }

  onfocus() {
    this.input.focus();
  }

  reset() {
    const { value } = this.input;
    this.input.value = '';
    this.combo.evaluate();
    this.combo.close();
    this.input.value = value;
  }
}
