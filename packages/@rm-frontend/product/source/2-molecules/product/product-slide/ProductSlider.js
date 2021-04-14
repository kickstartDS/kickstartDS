import lazySlider from '@rm-frontend/base/source/2-molecules/slider/lazySlider';

export const identifier = 'product.product-slider';
export default function () {
  return lazySlider().then(
    ({ default: Slider }) =>
      class ProductSlider extends Slider {
        static identifier = identifier;

        constructor(element) {
          const mainOptions = {
            perView:
              element.closest('.product-slider--large') &&
              !element.closest('.template--content-70-sidebar-30')
                ? 5
                : 3,
            gap: 16,
            breakpoints: {
              770: {
                perView: 2,
                peek: 100,
              },
              600: {
                perView: 1,
                peek: 60,
              },
            },
          };
          super(element, mainOptions);
        }
      }
  );
}
