import ComponentLoader from './ComponentLoader';

const loader = new ComponentLoader();
export function define(identifier, component) {
  loader.add({ [identifier]: component });
}
