import { Component } from '@kickstartds/core/lib/core';
import { slideDown } from '../../0-base/1-tools/js/slide';
import { render } from '../../0-base/1-tools/js/render';
import { Notification as notificationTemplate } from './NotificationComponent.tsx';

export default class Notification extends Component {
  static identifier = 'base.notification';

  constructor(element) {
    super(element);
    slideDown(element);
  }
}

export function addNotification(parent, type, message, title) {
  const notificationHtml = notificationTemplate({
    type,
    message,
    title,
  });
  render(notificationHtml, parent);
}
