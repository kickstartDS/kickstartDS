import { inBrowser } from '@kickstartds/core/lib/core';

export { default } from 'lazysizes';

if (inBrowser) {
  document.addEventListener('lazybeforeunveil', (event) => {
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
