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

const defaultOptions = {
  separator: '.',
  decimal: ',',
  duration: 2,
};

const durationModifier = (value) => Math.abs(value) ** (1 / 3) / 20;

export default class CountUpNumber extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);

    const text = element.textContent.replace(/\./g, '').replace(',', '.');
    const to = parseFloat(text);
    const countUp = new CountUp(element, to, {
      ...defaultOptions,
      duration: (defaultOptions.duration += durationModifier(to)),
    });
    const token = window.rm.radio.on(lazyEvents.beforeunveil, (_, el) => {
      if (el === element) {
        window.rm.radio.off(token);
        window.rm.radio.emit(events.start, {
          element,
          data: countUp,
        });
        countUp.start(() => window.rm.radio.emit(events.end, { element }));
      }
    });

    element.dataset.expand = element.dataset.expand || '-100';
    element.classList.add('lazyload');
  }
}

define(CountUpNumber.identifier, CountUpNumber);
