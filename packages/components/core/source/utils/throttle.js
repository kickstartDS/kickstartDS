export const throttle = (callback, delay) => {
  let timeoutId = null;
  return (...args) => {
    if (timeoutId == null) {
      timeoutId = window.setTimeout(() => {
        callback(...args);
        timeoutId = null;
      }, delay);
    }
  };
};
