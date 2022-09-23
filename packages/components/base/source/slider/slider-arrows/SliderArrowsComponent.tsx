import { FunctionComponent } from 'react';
import { IconComponent } from '../../icon/IconComponent';

export const SliderArrows: FunctionComponent = () => (
  <div className="c-slider__arrows" data-glide-el="controls">
    <button
      className="c-slider__arrow c-slider__arrow--prev"
      data-glide-dir="|<"
      tabIndex={-1}
      title="previous slide"
    >
      <IconComponent icon="chevron-left" />
    </button>
    <button
      className="c-slider__arrow c-slider__arrow--next"
      data-glide-dir="|>"
      tabIndex={-1}
      title="next slide"
    >
      <IconComponent icon="chevron-right" />
    </button>
  </div>
);
