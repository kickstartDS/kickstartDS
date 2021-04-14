import { Component } from '@rm-frontend/core';
import {
  fadeIn,
  fadeOut,
} from '@rm-frontend/base/source/0-base/1-tools/js/fade';

export default class EventFilterForm extends Component {
  static identifier = 'event.filter-form';

  constructor(element) {
    super(element);

    this.checkboxes = element.querySelectorAll('.input-checkbox');
    this.inputs = element.querySelectorAll('input, select');
    this.filterReset = element.querySelector('.event-list-filter__reset');

    this.element.addEventListener('change', this);
    this.checkFilters();
  }

  onchange() {
    this.checkFilters();
  }

  checkFilters() {
    requestAnimationFrame(() => {
      let showReset = false;
      this.checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          showReset = true;
        }
      });

      this.inputs.forEach((input) => {
        if (input.value && input.value !== '0') {
          showReset = true;
        }
      });

      if (showReset) {
        fadeIn(this.filterReset);
      } else {
        fadeOut(this.filterReset).then(() => {
          this.filterReset.style.display = 'none';
        });
      }
    });
  }
}
