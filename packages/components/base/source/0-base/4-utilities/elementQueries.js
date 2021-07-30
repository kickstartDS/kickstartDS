import { ElementQueries } from 'css-element-queries';
import { inBrowser } from '@kickstartds/core/core';

if (inBrowser) {
  ElementQueries.listen();
}
