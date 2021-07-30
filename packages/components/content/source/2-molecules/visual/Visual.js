import { Component, define } from '@kickstartds/core/component';
import { windowEvents } from '@kickstartds/core/utils';
import 'objectFitPolyfill/dist/objectFitPolyfill.basic.min';

const identifier = 'visual';
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
    // TODO: handle multiple intro-visuals
    // this was the first approach,
    // but additionally the scrolling header-height has to be substracted:
    // const rect = this.element.getBoundingClientRect();
    // const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // const height = this.element.offsetHeight;
    // window.scrollTo(0, rect.top + scrollTop + height /* - scolling heder height */);

    if (this.element.nextElementSibling) {
      this.element.nextElementSibling.scrollIntoView();
    } else {
      this.element.parentNode.nextElementSibling.scrollIntoView();
    }
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
