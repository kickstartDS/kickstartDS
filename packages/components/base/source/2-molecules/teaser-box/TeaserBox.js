import { Component, define } from '@kickstartds/core/lib/core';
import linkedArea from '../../0-base/1-tools/js/linkedArea';
import '../../0-base/4-utilities/elementQueries';

const identifier = 'base.teaser-box';
export default class TeaserBox extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);

    const link = element.querySelector('.c-teaser-box__link a');
    if (link) {
      element.classList.add('js-linked');
      linkedArea(element, link);
    }
  }
}

define(identifier, TeaserBox);
