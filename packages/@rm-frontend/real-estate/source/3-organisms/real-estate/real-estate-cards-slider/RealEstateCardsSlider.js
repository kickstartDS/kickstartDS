import lazySlider from '@rm-frontend/base/source/2-molecules/slider/lazySlider';
import { identifier } from './RealEstateCardSlider.desc';

export default function () {
  return lazySlider().then(
    ({ default: Slider }) =>
      class RealEstateCardsSlider extends Slider {
        static identifier = identifier;

        constructor(element) {
          const mainOptions = {
            perView: 4,
            gap: 16,
            autoheight: false,
            breakpoints: {
              1200: {
                perView: 3,
                peek: 0,
              },
              960: {
                perView: 2,
                peek: 0,
              },
              600: {
                perView: 1,
                peek: 0,
              },
            },
          };

          if (element.closest('.l-main-wrap--full, .l-main-wrap--full-gap')) {
            mainOptions.breakpoints[1500] = { perView: 4 };
            mainOptions.breakpoints[1700] = { perView: 5 };
            mainOptions.perView = 6;
          }

          if (element.closest('.l-main-wrap--narrow')) {
            mainOptions.breakpoints[1200] = { perView: 2 };
            mainOptions.perView = 2;
          }

          super(element, mainOptions);
        }
      }
  );
}
