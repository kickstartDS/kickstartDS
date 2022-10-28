import { Component } from '@kickstartds/core/lib/component';

const identifier = 'content.visual';
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
      this.onDisconnect(() =>
        this.continueBtn.removeEventListener('click', this)
      );
    }

    const video = element.querySelector('.c-visual__video');
    if (video) {
      let inViewport;
      let videoIsPlaying;
      const playVideo = () => {
        if (inViewport) {
          if (!videoIsPlaying) {
            video.play();
          }
        } else if (videoIsPlaying) {
          video.pause();
        }
        videoIsPlaying = inViewport;
      };
      const observer = new IntersectionObserver((entries) => {
        inViewport = entries.reduce((_, entry) => entry.isIntersecting, false);
        playVideo();
      });
      observer.observe(element);
      playVideo();

      this.onDisconnect(() => observer.unobserve(element));
    }
  }

  onclick() {
    scrollToSibling(this.element);
  }
}
