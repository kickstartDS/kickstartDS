import { Component } from '@kickstartds/core/lib/component';

export default class IframeRatio extends Component {
  static identifier = 'base.iframe-ratio';

  constructor(element) {
    super(element);

    const iframe = element.firstElementChild;
    if (iframe && iframe.tagName === 'IFRAME') {
      const height = iframe.height || iframe.offsetHeight;
      const width = iframe.width || iframe.offsetWidth;
      element.style.paddingTop = `${(height / width) * 100}%`;
      element.style.width = `${width}px`;
      element.classList.add('iframe-ratio--apsect-ratio-calculated');

      if (element.dataset.autoWidth) {
        element.parentElement.style.width = `min(${width}px, 100%)`;
      }
    }
  }
}
