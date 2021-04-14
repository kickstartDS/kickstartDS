import { Component } from '@rm-frontend/core';
import linkedArea from '@rm-frontend/base/source/0-base/1-tools/js/linkedArea';

export default class ProductCard extends Component {
  static identifier = 'product.product-card';

  constructor(element) {
    super(element);

    const link = element.querySelector('.product__more a');
    if (link) {
      element.classList.add('product-cards__item--clickable');
      linkedArea(element, link);
    }
  }
}
