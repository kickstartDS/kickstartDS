import { define } from '@kickstartds/core/lib/core';
import { lazySlider } from '../slider/lazySlider';

const identifier = 'content.quotes-slider';

const lazyQuotesSlider = () =>
  lazySlider().then(
    ({ default: Slider }) =>
      class QuotesSlider extends Slider {
        static identifier = identifier;

        constructor(element) {
          const mainOptions = {
            perView: 1,
            gap: 16,
          };

          super(element, mainOptions);
        }
      }
  );

export default lazyQuotesSlider;

define(identifier, lazyQuotesSlider);
