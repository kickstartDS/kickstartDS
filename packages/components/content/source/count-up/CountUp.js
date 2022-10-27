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

    const number = element.querySelector('.c-count-up__number');
    const text = number.textContent.replace(/\./g, '').replace(',', '.');
    const to = parseFloat(text);
    const countUp = new CountUp(number, to, {
      ...defaultOptions,
      duration: defaultOptions.duration + durationModifier(to),
    });
    const token = window._ks.radio.on(lazyEvents.beforeunveil, (_, el) => {
      if (el === element) {
        window._ks.radio.off(token);
        window._ks.radio.emit(events.start, {
          element,
          data: countUp,
        });
        countUp.start(() => window._ks.radio.emit(events.end, { element }));
      }
    });

    element.dataset.expand = element.dataset.expand || '-100';
    element.classList.add('lazyload');
  }
}

define(CountUpNumber.identifier, CountUpNumber);
