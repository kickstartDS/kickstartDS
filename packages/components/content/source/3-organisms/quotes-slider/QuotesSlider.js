import { define } from '@kickstartds/core/component';
import { lazySlider } from '@kickstartds/base/slider/lazySlider';

const identifier = 'quotes.quotes-slider';

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
