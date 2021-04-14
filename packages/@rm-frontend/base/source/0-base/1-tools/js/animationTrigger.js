import Animate from 'animate.js';

export const events = {
  init: 'animate.init',
  inView: 'animate.inView',
  animated: 'animate.animate',
};

const animate = new Animate({
  target: '[data-animate]',
  animatedClass: 'js-animated',
  offset: [0.5, 0.5],
  delay: 0,
  remove: true,
  scrolled: false,
  reverse: false,
  onLoad: true,
  onScroll: true,
  onResize: false,
  disableFilter: false,
  callbackOnInit() {
    window.rm.radio.emit(events.init);
  },
  callbackOnInView(el) {
    window.rm.radio.emit(events.inView, el);
  },
  callbackOnAnimate(el) {
    window.rm.radio.emit(events.animated, el);
  },
});
animate.init();
