import { Component } from '@kickstartds/core/component';

function transform(str) {
  const replaced = str
    .replace('{url}', window.location.href)
    .replace('{title}', document.title);
  return encodeURI(replaced);
}
export default class ShareMailLink extends Component {
  static identifier = 'base.share-mail-link';

  constructor(element) {
    super(element);

    element.setAttribute(
      'href',
      `mailto:?body=${transform(window.rm.shareMail.body)}&subject=${transform(
        window.rm.shareMail.subject
      )}`
    );
  }
}
