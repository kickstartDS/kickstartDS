export const inBrowser = typeof window !== 'undefined';

const ready = () =>
  inBrowser &&
  (document.readyState === 'interactive' || document.readyState === 'complete');
const queue: (() => void)[] = [];

if (inBrowser && !ready()) {
  document.addEventListener('DOMContentLoaded', () => {
    while (queue.length) {
      queue.pop()();
    }
  });
}

export function domLoaded(callback: () => void) {
  if (inBrowser) {
    if (ready()) {
      setTimeout(callback);
    } else {
      queue.push(callback);
    }
  }
}
