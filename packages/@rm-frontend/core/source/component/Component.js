export default class Component {
  static isComponent = true;

  static identifier = '';

  static events = {};

  static actions = {};

  constructor(element) {
    this.element = element;

    if (this.constructor.actions) {
      const actions = Object.keys(this.constructor.actions);
      window.rm.radio.off(this.publicApiSubscription);
      this.publicApiSubscription = window.rm.radio.on(
        this.constructor.identifier,
        (msg, { args = [], element: el } = {}) => {
          const fn = msg.split('.')[2];
          if (fn && actions.includes(fn) && (!el || el === element)) {
            this[fn](...args);
          }
        }
      );
    }
  }

  handleEvent(event) {
    this[`on${event.type}`](event);
  }
}
