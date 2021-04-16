import { Component } from '@rm-frontend/core';

export default class VideoIframe extends Component {
  static identifier = 'base.iframe-ratio';

  constructor(element) {
    super(element);

    const child = element.firstElementChild;
    if (child && child.tagName === 'IFRAME') {
      element.style.paddingTop = `${
        (child.offsetHeight / child.offsetWidth) * 100
      }%`;
      element.classList.add('iframe-ratio--apsect-ratio-calculated');
    }
  }
}
