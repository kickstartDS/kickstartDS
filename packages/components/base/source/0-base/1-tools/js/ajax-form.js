import serialize from './serialize';
import emptyElement from './emptyElement';
import { addNotification } from '../../../2-molecules/notification/Notification';

export default function makeAjaxFormRequest(form, url, notificationTarget) {
  const fieldset = form.querySelector('fieldset');
  const submitButton = form.querySelector('button[type=submit]');
  submitButton.classList.remove('button--is-successful');
  submitButton.classList.add('button--is-loading');

  if (notificationTarget) {
    emptyElement(notificationTarget);
  }
  const notification = {};

  return fetch(url, {
    method: 'POST',
    body: serialize(form),
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  })
    .then((response) => {
      if (response.ok) {
        submitButton.classList.add('button--is-successful');

        if (fieldset) {
          fieldset.disabled = true;
        }
      }
      notification.type = response.ok ? 'success' : 'error';

      response.text().then((message) => {
        try {
          const data = JSON.parse(message);
          notification.message = `<p>${data.message}</p>`;
          if (data.errors) {
            notification.message += `<ul>${data.errors.map(
              (error) => `<li>${error}</li>`
            )}</ul>`;
          }
        } catch (e) {
          notification.type = 'error';
          notification.message = message;
        }
      });
    })
    .catch((error) => {
      notification.type = 'error';
      notification.message = error;
    })
    .finally(() => {
      submitButton.classList.remove('button--is-loading');
      if (notificationTarget) {
        addNotification(
          notificationTarget,
          notification.type,
          notification.message
        );
        notificationTarget.scrollIntoView();
      }
    });
}
