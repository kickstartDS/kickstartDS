import { ElementQueries } from 'css-element-queries';
import { inBrowser } from '@kickstartds/core/lib/core';

if (inBrowser) {
  ElementQueries.listen();
}
