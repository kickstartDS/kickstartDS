export const debounce = (callback, delay) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(callback, delay, args);
  };
};
