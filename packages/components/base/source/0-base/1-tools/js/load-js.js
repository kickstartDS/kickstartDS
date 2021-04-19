// A simple function for asynchronously loading JavaScript files
// inspired by https://github.com/filamentgroup/loadJS

const ref = window.document.getElementsByTagName('script')[0];

export default (src, cb) => {
  const script = window.document.createElement('script');
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
  script.onload = cb;
};
