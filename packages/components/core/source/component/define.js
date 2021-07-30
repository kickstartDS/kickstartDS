import ComponentLoader from './ComponentLoader';
import { inBrowser } from '../core/domLoaded';

const loader = new ComponentLoader();

export function define(identifier, component) {
  if (inBrowser) {
    loader.add({ [identifier]: component });
  }
}
