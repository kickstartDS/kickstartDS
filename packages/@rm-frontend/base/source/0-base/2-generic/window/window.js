import throttle from 'lodash-es/throttle';
import debounce from 'lodash-es/debounce';

export const events = {
  resize: 'base.window.resize',
  scroll: 'base.window.scroll',
  scrollEnd: 'base.window.scrollEnd',
  hashchange: 'base.window.hashchange',
};

const resizeEndPublisher = debounce(
  () => window.rm.radio.emitSync(events.resize),
  100
);
const scrollPublisher = throttle(
  () => window.rm.radio.emitSync(events.scroll),
  100
);
const scrollEndPublisher = debounce(
  () => window.rm.radio.emitSync(events.scrollEnd),
  100
);

window.addEventListener('resize', resizeEndPublisher);
window.addEventListener(
  'scroll',
  () => {
    scrollPublisher();
    scrollEndPublisher();
  },
  { capture: true, passive: true }
);
window.addEventListener('hashchange', (event) => {
  event.preventDefault();
  window.rm.radio.emit(events.hashchange);
});
