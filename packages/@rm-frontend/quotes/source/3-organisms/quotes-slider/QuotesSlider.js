import { registerModule } from '@rm-frontend/core';
// import { lazySlider } from '@rm-frontend/base/source/2-molecules/slider/lazySlider';
import Slider from '@rm-frontend/base/source/2-molecules/slider/Slider';

const identifier = 'quotes.quotes-slider';
// TODO: use lazySlider instead of Slider

// const lazyQuotesSlider = () =>
//   lazySlider().then(
//     ({ default: Slider }) =>
//       class QuotesSlider extends Slider {
//         static identifier = identifier;

//         constructor(element) {
//           const mainOptions = {
//             perView: 1,
//             gap: 16,
//           };

//           super(element, mainOptions);
//         }
//       }
//   );

// export default lazyQuotesSlider;

// registerModule({
//   [identifier]: lazyQuotesSlider,
// });

export default class QuotesSlider extends Slider {
  static identifier = identifier;

  constructor(element) {
    const mainOptions = {
      perView: 1,
      gap: 16,
    };

    super(element, mainOptions);
  }
}

registerModule({
  [identifier]: QuotesSlider,
});
