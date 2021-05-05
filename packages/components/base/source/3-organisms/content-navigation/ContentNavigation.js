import { Component } from '@kickstartds/core/lib/core';
import { windowEvents, breakpoints } from '@kickstartds/core/lib/utils';

export default class ContentNavigation extends Component {
  static identifier = 'base.content-navigation';

  constructor(element) {
    super(element);
    this.contentNavigationSpacer =
      '.content-navigation__links-collection__spacer';
    this.contentNavigationItem = element.querySelectorAll(
      '.content-navigation__item'
    );
    this.contentNavigationTopic = element.querySelectorAll(
      '.content-navigation__topic'
    );
    this.contentNavigationItemBox = element.querySelectorAll(
      '.content-navigation__item__box'
    );

    window.rm.radio.on(windowEvents.resize, () => this.resizeHandler());
    this.resizeHandler();
  }

  resizeHandler() {
    let contentNavigationLinkMaxHeight = 0;
    let contentNavigationTopicMaxHeight = 0;

    if (breakpoints.greaterThan('s')) {
      this.contentNavigationItemBox.forEach((contentNavigationItemBox) => {
        if (
          contentNavigationItemBox.clientHeight > contentNavigationLinkMaxHeight
        ) {
          contentNavigationLinkMaxHeight =
            contentNavigationItemBox.clientHeight;
        }
      });

      this.contentNavigationTopic.forEach((contentNavigationTopic) => {
        if (
          contentNavigationTopic.clientHeight > contentNavigationTopicMaxHeight
        ) {
          contentNavigationTopicMaxHeight = contentNavigationTopic.clientHeight;
        }
      });
    }

    this.contentNavigationItemBox.forEach((contentNavigationItemBox) => {
      contentNavigationItemBox.style.minHeight = `${contentNavigationLinkMaxHeight}px`;
    });

    this.contentNavigationTopic.forEach((contentNavigationTopic) => {
      contentNavigationTopic.style.minHeight = `${contentNavigationTopicMaxHeight}px`;
    });
  }
}
