/*
  Inspired by https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/
  By Osvaldas Valutis, www.osvaldas.info
  Available for use under the MIT License
*/

import { Component } from '@kickstartds/core/lib/core';

export default class FileUpload extends Component {
  static identifier = 'base.fileupload';

  constructor(element) {
    super(element);

    this.label = element.nextElementSibling;
    this.labelText = this.label.textContent;
    this.captionTemplate = element.getAttribute('data-multiple-caption') || '';

    element.addEventListener('change', this);
  }

  onchange(event) {
    const fileName =
      this.element.files && this.element.files.length > 1
        ? this.captionTemplate.replace('{count}', this.element.files.length)
        : event.target.value.split('\\').pop();

    if (fileName) {
      this.label.querySelector('span').textContent = fileName;
    } else {
      this.label.textContent = this.labelVal;
    }
  }
}
