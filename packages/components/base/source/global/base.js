import { domLoaded, inBrowser } from '@kickstartds/core/core';
import svgFixer from '../helpers/svg-icon-baseurl';
import '../generic/polyfills/polyfills';

if (inBrowser) {
  document.documentElement.classList.add('js');
}

domLoaded(() => {
  svgFixer();
});
