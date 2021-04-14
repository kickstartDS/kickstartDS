const docState = document.readyState;
const ready = docState === 'interactive' || docState === 'complete';
const queue = [];

if (!ready) {
  document.addEventListener('DOMContentLoaded', () => {
    while (queue.length) {
      queue.pop()();
    }
  });
}

export default function domLoaded(callback) {
  if (ready) {
    setTimeout(callback);
  } else {
    queue.push(callback);
  }
}
