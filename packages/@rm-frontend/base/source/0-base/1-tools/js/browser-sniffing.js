const ua = window.navigator.userAgent;

export function isIE() {
  return ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
}
