import ComponentLoader from './component/ComponentLoader';
import './radio';

export { default as domLoaded } from './domLoaded';
export { default as Component } from './component/Component';
export { uid } from './component/helper';

const loader = new ComponentLoader();

export function registerModule(components) {
  loader.add(components);
}

/**
 * @deprecated this stays only for backward compatibility
 * and will be removed in next major version 3
 * */
export function useDefault(component) {
  return component.default;
}
