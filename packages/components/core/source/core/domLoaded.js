export const inBrowser = typeof window !== 'undefined';

const ready = () =>
  inBrowser &&
  (document.readyState === 'interactive' || document.readyState === 'complete');
const queue = [];

if (inBrowser && !ready()) {
  document.addEventListener('DOMContentLoaded', () => {
    while (queue.length) {
      queue.pop()();
    }
  });
}

export function domLoaded(callback) {
  if (inBrowser) {
    if (ready()) {
      setTimeout(callback);
    } else {
      queue.push(callback);
    }
  }
}
