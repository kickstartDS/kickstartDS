import { Component } from '@rm-frontend/core';
import linkedArea from '@rm-frontend/base/source/0-base/1-tools/js/linkedArea';

export default class EventLatestItem extends Component {
  static identifier = 'event.latest-item';

  constructor(element) {
    super(element);

    const link = element.querySelector("[id^='event-link-more']");
    linkedArea(element, link);
  }
}
