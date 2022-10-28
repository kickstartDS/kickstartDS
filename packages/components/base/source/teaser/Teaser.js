import { Component } from '@kickstartds/core/lib/component';
import linkedArea from '../helpers/linkedArea';

const identifier = 'base.teaser';
export default class Teaser extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);

    const link = element.querySelector('.c-teaser__link a');
    if (link) {
      element.classList.add('js-linked');
      const cleanup = linkedArea(element, link);

      this.onDisconnect(cleanup);
    }
  }
}
