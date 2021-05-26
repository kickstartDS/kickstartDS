import {
  Component,
  define,
  events as lazyEvents,
} from '@kickstartds/core/lib/core';
import { CountUp } from 'countup.js';

const identifier = 'content.count-up';
const events = {
  start: `${identifier}.start`,
  end: `${identifier}.end`,
};

const countUpOptions = {
  separator: '.',
  decimal: ',',
};

export default class CountUpNumber extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);

    const text = element.textContent.replace(/\./g, '').replace(',', '.');
    const countUp = new CountUp(element, parseFloat(text), countUpOptions);
    const token = window.rm.radio.on(lazyEvents.beforeunveil, (_, el) => {
      if (el === element) {
        window.rm.radio.off(token);
        window.rm.radio.emit(events.start, {
          component: this,
          data: countUp,
        });
        countUp.start(() =>
          window.rm.radio.emit(events.end, { component: this })
        );
      }
    });

    element.dataset.expand = element.dataset.expand || '-100';
    element.classList.add('lazyload');
  }
}

define(CountUpNumber.identifier, CountUpNumber);
