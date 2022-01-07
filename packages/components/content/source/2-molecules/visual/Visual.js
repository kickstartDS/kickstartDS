import { Component, define } from '@kickstartds/core/lib/core';
import { windowEvents } from '@kickstartds/core/lib/utils';
import 'objectFitPolyfill/dist/objectFitPolyfill.basic.min';

const identifier = 'visual';
const scrollToSibling = (element) => {
  if (element) {
    if (element.nextElementSibling) {
      element.nextElementSibling.scrollIntoView();
    } else {
      scrollToSibling(element.parentElement);
    }
  }
};

export default class Visual extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);

    this.continueBtn = element.querySelector('.c-visual__continue-btn');
    if (this.continueBtn) {
      this.continueBtn.addEventListener('click', this);
    }

    this.video = element.querySelector('.c-visual__video');
    if (this.video) {
      // prevent multiple scroll listeners
      if (!this.scrollToken) {
        this.scrollToken = window.rm.radio.on(windowEvents.scroll, () =>
          this.playVideo()
        );
      }
      this.videoIsPlaying = false;
      this.playVideo();
    }
  }

  onclick() {
    scrollToSibling(this.element);
  }

  playVideo() {
    if (this.isScrolledOutOfView) {
      if (this.videoIsPlaying) {
        this.video.pause();
        this.videoIsPlaying = false;
      }
    } else if (!this.videoIsPlaying) {
      this.video.play();
      this.videoIsPlaying = true;
    }
  }

  get isScrolledOutOfView() {
    const docViewTop = window.pageYOffset;
    const elemBottom = this.element.offsetHeight;

    return docViewTop > elemBottom;
  }
}

define(identifier, Visual);
