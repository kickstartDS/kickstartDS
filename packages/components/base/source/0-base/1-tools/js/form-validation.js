import Bouncer from 'formbouncerjs/dist/bouncer';
import { uid } from '@kickstartds/core/lib/core';
import { breakpoints } from '@kickstartds/core/lib/utils';

const mainHeader = document.querySelector('.main-header');
const focusEvents = {
  handleEvent(event) {
    if (breakpoints.lessThan('m')) {
      // eslint-disable-next-line default-case
      switch (event.type) {
        case 'focus':
          mainHeader.style.top = `-${mainHeader.offsetHeight}px`;
          break;

        case 'blur':
          mainHeader.style.top = '';
          break;
      }
    }
  },
};

export default function formValidation(form, options) {
  // Hide fixed header to make room for onscreen keyboard on touch devices (except on overlay form)
  const inputfields = form.querySelectorAll('.input-field');
  if (mainHeader) {
    inputfields.forEach((field) => {
      field.addEventListener('focus', focusEvents);
      field.addEventListener('blur', focusEvents);
    });
  }

  if (!form.hasAttribute('data-uid')) {
    form.setAttribute('data-uid', uid());
  }

  return new Bouncer(`[data-uid="${form.dataset.uid}"]`, {
    customValidations: {
      checkboxGroupRequired(field) {
        if (field.type !== 'checkbox') return false;

        const wrapper = field.closest('.input-multi-checkbox--required');
        if (!wrapper) return false;

        const checkboxes = [...wrapper.querySelectorAll('[type="checkbox"')];
        const invalid = !checkboxes.some((checkbox) => checkbox.checked);
        checkboxes.forEach((checkbox) =>
          checkbox.classList[invalid ? 'add' : 'remove']('form-item--error')
        );
        const last = checkboxes.pop();

        if (field !== last) {
          if (!invalid) {
            const parent = last.parentElement;
            const msg = parent.querySelector('div.form-item--error');
            if (msg) {
              parent.removeChild(msg);
            }
          }
          return false;
        }
        return invalid;
      },
    },
    fieldClass: 'form-item--error',
    errorClass: 'form-item--error',
    errorElement: 'span',
    messages: window.rm.validationMessages || {},
    ...options,
  });
}
