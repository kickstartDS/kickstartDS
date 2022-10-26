/* eslint-disable no-new */
import { findComponentClass, executeHooks } from './helper';
import { uid } from './uid';
import { domLoaded, inBrowser } from '../domLoaded';
import { events } from '../lazysizes';

const componentAttribute = 'ks-component';
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

function mountElement(
  element,
  componentClassName,
  ComponentClassOrFn,
  mountHooks
) {
  return new Promise((resolve) => {
    if (
      element.classList.contains('lazyload') &&
      !element.classList.contains('lazyloaded')
    ) {
      const topic = rm.radio.on(
        `${events.beforeunveil}.${componentClassName}`,
        (_, el) => {
          if (el === element) {
            rm.radio.off(topic);
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
      if (ComponentClass) {
        element.setAttribute('data-uid', uid());
        new ComponentClass(element);
        executeHooks(element, mountHooks);
      }
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(`Error in ${componentClassName}\n`, error);
    });
}

export default class ComponentLoader {
  constructor({ mountHooks = [], unmountHooks = [] } = {}) {
    if (!inBrowser) return;

    this.mountHooks = mountHooks;
    this.unmountHooks = unmountHooks;
    this.classes = {};

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        switch (mutation.type) {
          case 'attributes':
            if (mutation.oldValue) {
              this.unmount([mutation.target]);
            }
            if (mutation.target.hasAttribute(componentAttribute)) {
              this.mount([mutation.target]);
            }
            break;
          case 'childList':
            this.mount(mutation.addedNodes);
            this.unmount(mutation.removedNodes);
            break;
          default:
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
        attributeFilter: [componentAttribute],
      });
    });
  }

  add(classes) {
    Object.assign(this.classes, classes);
    domLoaded(() => {
      Object.entries(classes).forEach(
        ([componentClassName, ComponentClassOrFn]) => {
          document.body
            .querySelectorAll(`[${componentAttribute}="${componentClassName}"]`)
            .forEach((element) => {
              mountElement(
                element,
                componentClassName,
                ComponentClassOrFn,
                this.mountHooks
              );
            });
        }
      );
    });
  }

  mount(nodeList) {
    eachElement(nodeList, (element) => {
      if (element.hasAttribute('data-uid')) return;

      const componentClassName = element.getAttribute(componentAttribute);
      const ComponentClassOrFn = this.classes[componentClassName];
      if (ComponentClassOrFn) {
        mountElement(
          element,
          componentClassName,
          ComponentClassOrFn,
          this.mountHooks
        );
      }
    });
  }

  unmount(nodeList) {
    eachElement(nodeList, (element) => {
      if (element.hasAttribute('data-uid')) {
        element.removeAttribute('data-uid');
        executeHooks(element, this.unmountHooks);
      }
    });
  }
}
