import { Component } from '@rm-frontend/core';
import linkedArea from '@rm-frontend/base/source/0-base/1-tools/js/linkedArea';

export default class ProductTeaser extends Component {
  static identifier = 'product.product-teaser';

  constructor(element) {
    super(element);

    const link = this.element.querySelector('.product-teaser__item__more a');
    linkedArea(element, link);
  }
}
