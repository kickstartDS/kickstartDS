import { Component } from '@kickstartds/core/lib/core';
import formValidation from '../../0-base/1-tools/js/form-validation';
import makeAjaxFormRequest from '../../0-base/1-tools/js/ajax-form';
import { identifier } from './Form.desc';

export default class Form extends Component {
  static identifier = identifier;

  constructor(element, validationOptions = {}) {
    super(element);

    this.notificationTarget = element.querySelector('.form-row--notification');

    this.url = element.dataset.url;
    validationOptions.disableSubmit = !!this.url;

    this.validation = formValidation(element, validationOptions);

    // the hidden submitPlaceholder filed gets the name and value of the clicked submit button
    // in the onclick method,  b/c the form is submitted by javascript and the clicked
    // button value is not submitted by default
    // see https://github.com/cferdinandi/bouncer/issues/36
    this.submitPlaceholder = document.createElement('input');
    this.submitPlaceholder.type = 'hidden';
    element.appendChild(this.submitPlaceholder);

    element.addEventListener('click', this);
    element.addEventListener('bouncerFormValid', this);
  }

  onclick(event) {
    const submitBtn = event.target.closest('[type=submit]');
    if (submitBtn && submitBtn.name) {
      this.submitPlaceholder.name = submitBtn.name;
      this.submitPlaceholder.value = submitBtn.value;
    }
  }

  onbouncerFormValid() {
    if (this.url) {
      makeAjaxFormRequest(this.element, this.url, this.notificationTarget);
    }
  }
}
