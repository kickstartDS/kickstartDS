/* eslint-disable no-console */
/* eslint-disable no-new */
import { uid } from './uid';
import { domLoaded, inBrowser } from '../domLoaded';
import { events } from '../lazysizes';

const componentClasses = {};
const componentAttribute = 'ks-component';
const componentMountedAttribute = 'data-uid';

const eachElement = (nodeList, cb) =>
  nodeList.forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const elements = [
        node,
        ...node.querySelectorAll(`[${componentAttribute}]`),
      ];
      elements.forEach(cb);
    }
  });
const findComponentClass = (input) => {
  // input is either a class or a function returning a promise (that resolves to a class)
  if (!input) return null;
  if (input.isComponent) return input;
  return input().then((c) => c.default || c);
};

const mountElement = (element, componentClassName, ComponentClassOrFn) =>
  new Promise((resolve) => {
    if (
      element.classList.contains('lazyload') &&
      !element.classList.contains('lazyloaded')
    ) {
      const topic = window._ks.radio.on(
        `${events.beforeunveil}.${componentClassName}`,
        (_, el) => {
          if (el === element) {
            window._ks.radio.off(topic);
            resolve(ComponentClassOrFn);
          }
        }
      );
    } else {
      resolve(ComponentClassOrFn);
    }
  })
    .then(findComponentClass)
    .then((ComponentClass) => {
      if (ComponentClass && !element.hasAttribute(componentMountedAttribute)) {
        element.setAttribute(componentMountedAttribute, uid());
        element._ks = { d: [] };
        new ComponentClass(element);
      }
    })
    .catch((error) => {
      console.error(`Error in ${componentClassName}:`);
      console.error(error);
    });

const mount = (nodeList) =>
  eachElement(nodeList, (element) => {
    if (element.hasAttribute(componentMountedAttribute)) return;

    const componentClassName = element.getAttribute(componentAttribute);
    const ComponentClassOrFn = componentClasses[componentClassName];
    if (ComponentClassOrFn) {
      mountElement(element, componentClassName, ComponentClassOrFn);
    }
  });

const unmount = (nodeList) =>
  eachElement(nodeList, (element) => {
    element.removeAttribute(componentMountedAttribute);
    element._ks?.d.forEach((disconnectCb) => {
      try {
        disconnectCb();
        // eslint-disable-next-line no-empty
      } catch (e) {}
    });
    delete element._ks;
  });

export const define = (identifier, component) => {
  componentClasses[identifier] = component;
  domLoaded(() => {
    document.body
      .querySelectorAll(`[${componentAttribute}="${identifier}"]`)
      .forEach((element) => mountElement(element, identifier, component));
  });
};

if (inBrowser) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      // eslint-disable-next-line default-case
      switch (mutation.type) {
        case 'attributes':
          const { target } = mutation;
          if (mutation.oldValue) {
            unmount([target]);
          }
          if (target.hasAttribute(componentAttribute)) {
            mount([target]);
          }
          break;
        case 'childList':
          mount(mutation.addedNodes);
          unmount(mutation.removedNodes);
          break;
      }
    });
  });

  domLoaded(() => {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeOldValue: true,
      attributeFilter: [componentAttribute, componentMountedAttribute],
    });
  });
}
