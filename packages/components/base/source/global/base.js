import { inBrowser } from '@kickstartds/core/lib/core';

if (inBrowser) {
  document.documentElement.classList.add('js');
}
