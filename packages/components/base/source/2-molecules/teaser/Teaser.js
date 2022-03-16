import { Component, define } from '@kickstartds/core/lib/core';
import linkedArea from '../../0-base/1-tools/js/linkedArea';

const identifier = 'base.teaser';
export default class Teaser extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);

    const link = element.querySelector('.c-teaser__link a');
    if (link) {
      element.classList.add('js-linked');
      linkedArea(element, link);
    }
  }
}

define(identifier, Teaser);
