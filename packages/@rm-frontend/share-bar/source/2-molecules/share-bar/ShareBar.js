import Shariff from 'shariff';
import { Component } from '@rm-frontend/core';
import { identifier } from './ShareBar.desc';

export default class ShareBar extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);

    this.init();
  }

  init() {
    const shariff = new Shariff(this.element, {
      services: ['whatsapp', 'facebook', 'twitter', 'mail'],
      infoDisplay: 'self',
      mailUrl: 'mailto:',
    });

    shariff.services.forEach((service) => {
      if (service.name === 'mail') service.name = 'email';
      const iconWrapper = this.element.querySelector(`.${service.faName}`);
      iconWrapper.innerHTML = `<svg class="icon" role="img"><use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-${service.name}"></use></svg >`;
    });
  }
}
