import 'lazysizes';
import { inBrowser } from './domLoaded';

export const events = {
  beforeunveil: 'core.lazysizes.beforeunveil',
};

if (inBrowser) {
  document.addEventListener('lazybeforeunveil', (event) => {
    const componentName = event.target.dataset.component;
    if (componentName) {
      window.rm.radio.emit(
        `${events.beforeunveil}.${componentName}`,
        event.target
      );
    } else {
      window.rm.radio.emit(events.beforeunveil, event.target);
    }

    const bg = event.target.getAttribute('data-bg');
    if (bg) {
      event.target.style.backgroundImage = `url(${bg})`;
    }
  });
}

export function lazyChildrenLoaded(element) {
  const lazyElements = element.querySelectorAll('.lazyload, .lazyloading');
  let { length } = lazyElements;
  if (length === 0) return Promise.resolve();
  return new Promise((resolve) => {
    function decrement() {
      length -= 1;
      if (length === 0) {
        element.removeEventListener('lazyloaded', decrement);
        resolve();
      }
    }
    element.addEventListener('lazyloaded', decrement);
  });
}
