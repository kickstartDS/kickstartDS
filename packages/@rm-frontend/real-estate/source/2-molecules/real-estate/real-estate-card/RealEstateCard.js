import { Component } from '@rm-frontend/core';
import linkedArea from '@rm-frontend/base/source/0-base/1-tools/js/linkedArea';

export default class RealEstateCard extends Component {
  static identifier = 'real-estate.real-estate-card';

  constructor(element) {
    super(element);

    const link = element.querySelector('.real-estate-card__more a');
    if (link) {
      element.classList.add('real-estate-card--clickable');
      linkedArea(element, link);
    }
  }
}
