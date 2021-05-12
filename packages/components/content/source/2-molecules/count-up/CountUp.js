import { Component, define, inBrowser } from '@kickstartds/core/lib/core';
import { CountUp } from 'countup.js';

const events = {
  inView: 'animate-number.inView',
};

if (inBrowser) {
  document.addEventListener('lazybeforeunveil', (event) => {
    const componentName = event.target.dataset.component;
    if (componentName === 'content.count-up') {
      window.rm.radio.emit(events.inView, event.target);
    }
  });
}

const countUpOptions = {
  separator: '.',
  decimal: ',',
};

export default class CountUpNumber extends Component {
  static identifier = 'content.count-up';

  constructor(element) {
    super(element);

    const text = element.textContent.replace(/\./g, '').replace(',', '.');
    const countUp = new CountUp(element, parseFloat(text), countUpOptions);

    const token = window.rm.radio.on(events.inView, (_, el) => {
      if (el === element) {
        countUp.start();
        window.rm.radio.off(token);
      }
    });

    element.dataset.expand = element.dataset.expand || '-100';
    element.classList.add('lazyload');
  }
}

define(CountUpNumber.identifier, CountUpNumber);
