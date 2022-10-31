export const sliderArrowsTemplate = `
  <div className="c-slider__arrows" data-glide-el="controls">
    <button className="c-slider__arrow c-slider__arrow--prev" data-glide-dir="|<" tabIndex={-1} title="previous slide" >
      <svg class="icon">
        <use xlink:href="icon-chevron-left" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
      </svg>
    </button>
    <button className="c-slider__arrow c-slider__arrow--next" data-glide-dir="|>" tabIndex={-1} title="next slide" >
      <svg class="icon">
        <use xlink:href="icon-chevron-right" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
      </svg>
    </button>
  </div>
`;
