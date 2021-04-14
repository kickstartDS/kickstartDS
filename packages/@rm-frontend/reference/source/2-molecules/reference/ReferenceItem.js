import linkedArea from '@rm-frontend/base/source/0-base/1-tools/js/linkedArea';
import { Component } from '@rm-frontend/core';

export default class ReferenceItem extends Component {
  static identifier = 'reference.item';

  constructor(element) {
    super(element);

    const link = element.querySelector('a');

    if (link) {
      element.classList.add('js-linked');
      linkedArea(element, link);
    }
  }
}
