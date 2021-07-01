import { domLoaded, inBrowser } from '@kickstartds/core/lib/core';
import svgFixer from '../1-tools/js/svg-icon-baseurl';
import '../2-generic/polyfills/polyfills';

if (inBrowser) {
  document.documentElement.classList.add('js');
}

domLoaded(() => {
  svgFixer();
});
