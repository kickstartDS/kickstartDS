import { Component, define } from '@kickstartds/core/component';
import linkedArea from '../../0-base/1-tools/js/linkedArea';
import '../../0-base/4-utilities/elementQueries';

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
