import throttle from 'lodash-es/throttle';
import debounce from 'lodash-es/debounce';
import { inBrowser } from '../core/domLoaded';

export const windowEvents = {
  resize: 'core.window.resize',
  scroll: 'core.window.scroll',
  scrollEnd: 'core.window.scrollEnd',
  hashchange: 'core.window.hashchange',
};

if (inBrowser) {
  const resizeEndPublisher = debounce(
    () => window._ks.radio.emitSync(windowEvents.resize),
    100
  );
  const scrollPublisher = throttle(
    () => window._ks.radio.emitSync(windowEvents.scroll),
    100
  );
  const scrollEndPublisher = debounce(
    () => window._ks.radio.emitSync(windowEvents.scrollEnd),
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
    window._ks.radio.emit(windowEvents.hashchange);
  });
}
