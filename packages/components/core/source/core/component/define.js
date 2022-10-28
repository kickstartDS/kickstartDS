import ComponentLoader from './ComponentLoader';
import { inBrowser } from '../domLoaded';

const loader = new ComponentLoader();

export function define(identifier, component) {
  if (inBrowser) {
    loader.add(identifier, component);
  }
}
