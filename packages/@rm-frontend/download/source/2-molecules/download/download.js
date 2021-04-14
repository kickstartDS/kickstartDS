import { Component } from '@rm-frontend/core';
import linkedArea from '@rm-frontend/base/source/0-base/1-tools/js/linkedArea';

export default class DownloadItem extends Component {
  static identifier = 'download.item';

  constructor(element) {
    super(element);

    const link = element.querySelector('a');
    if (link) {
      linkedArea(element, link);
    }
  }
}
