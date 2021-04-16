import { domLoaded } from '@rm-frontend/core';
import svgFixer from '../1-tools/js/svg-icon-baseurl';
import '../2-generic/polyfills/polyfills';

document.documentElement.classList.add('js');
domLoaded(() => {
  svgFixer();
});
