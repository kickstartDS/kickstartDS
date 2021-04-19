import { Component } from '@kickstartds/core/lib/core';
import { slideToggle } from '../../0-base/1-tools/js/slide';
import classToggle from '../../0-base/1-tools/js/classToggle';

export default class ContentNavigationItem extends Component {
  static identifier = 'base.content-navigation-item';

  constructor(element) {
    super(element);

    this.contentNavigationToggle = element.querySelector(
      '.content-navigation__toggle'
    );
    this.contentNavigationToggleText = element.querySelectorAll(
      '.content-navigation__toggle__text'
    );
    this.contentNavigationSpacer =
      '.content-navigation__links-collection__spacer';
    this.contentNavigationMore = element.querySelector(
      '.content-navigation__links-collection--more'
    );
    this.contentNavigationToggleOpen = element.querySelector(
      'content-navigation__toggle--open'
    );

    if (this.contentNavigationToggle) {
      this.contentNavigationToggle.addEventListener('click', this);
    }
  }

  onclick() {
    const contentToggle = this.contentNavigationMore;
    slideToggle(contentToggle);

    classToggle(
      this.contentNavigationToggle,
      'content-navigation__toggle--open'
    );

    this.contentNavigationToggleText.forEach((contentNavigationToggleText) => {
      classToggle(contentNavigationToggleText, 'is-hidden');
    });
  }
}
