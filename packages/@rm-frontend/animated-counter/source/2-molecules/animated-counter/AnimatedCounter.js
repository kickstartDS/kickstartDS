import { Component } from '@rm-frontend/core';
import { CountUp } from 'countup.js';
import Animate from 'animate.js';

const events = {
  inView: 'animate-number.inView',
};

const animate = new Animate({
  target: '[data-component="animated-counter.number"]',
  animatedClass: 'js-animated',
  offset: [0.6, 0.5],
  delay: 0,
  remove: false,
  scrolled: false,
  reverse: false,
  onLoad: true,
  onScroll: true,
  onResize: true,
  callbackOnInView(el) {
    window.rm.radio.emit(events.inView, el);
  },
});

animate.init();

const countUpOptions = {
  separator: '.',
  decimal: ',',
};

export default class AnimatedCounter extends Component {
  static identifier = 'animated-counter.number';

  constructor(element) {
    super(element);

    const text = element.textContent.replace(/\./g, '').replace(',', '.');
    const countUp = new CountUp(element, parseFloat(text), countUpOptions);

    if (element.dataset.visibility) {
      countUp.start();
    } else {
      const token = window.rm.radio.on(events.inView, (_, el) => {
        if (el === element) {
          countUp.start();
          window.rm.radio.off(token);
        }
      });
    }
  }
}
