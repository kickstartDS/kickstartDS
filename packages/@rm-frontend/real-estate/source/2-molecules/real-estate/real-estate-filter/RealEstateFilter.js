import { Component } from '@rm-frontend/core';
import {
  fadeIn,
  fadeOut,
} from '@rm-frontend/base/source/0-base/1-tools/js/fade';
import lazyForm from '@rm-frontend/base/source/2-molecules/form/lazyForm';
import {
  events as datepickerEvents,
  actions as datepickerActions,
} from '@rm-frontend/base/source/1-atoms/input/datepicker/Datepicker.desc';

export default class RealEstateFilter extends Component {
  static identifier = 'real-estate.filter';

  constructor(element) {
    super(element);

    this.filterResetButton = element.querySelector(
      '.real-estate-filter__reset-button'
    );
    this.checkboxes = element.querySelectorAll('.input-checkbox');
    this.inputs = element.querySelectorAll('input, select');

    lazyForm().then(({ default: Form }) => {
      this.form = new Form(element.closest('form'), {
        customValidations: {
          moreThan(field) {
            const selector = field.getAttribute('data-more-than');
            if (!selector) return false;

            const otherField = field.form.querySelector(selector);
            if (!otherField) return false;

            return parseInt(otherField.value, 10) > parseInt(field.value, 10);
          },
        },
      });
    });

    this.element.addEventListener('change', this);

    this.checkFilters();

    element
      .querySelectorAll('[data-component="base.datepicker"]')
      .forEach((datepicker) => {
        const token = window.rm.radio.on(
          datepickerEvents.change,
          (_, { element: el }) => {
            if (el === datepicker) {
              window.rm.radio.off(token);
              window.rm.radio.emit(datepickerActions.setMinDate, {
                element: datepicker,
                args: [new Date()],
              });
            }
          }
        );
      });
  }

  onchange() {
    this.checkFilters();
  }

  showResetButton() {
    fadeIn(this.filterResetButton);
  }

  hideResetButton() {
    fadeOut(this.filterResetButton).then(() => {
      this.filterResetButton.style.display = 'none';
    });
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
        this.showResetButton();
      } else {
        this.hideResetButton();
      }
    });
  }
}
