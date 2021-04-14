import { FunctionComponent } from 'react';
import { Icon } from '../../../1-atoms/icon/IconComponent';

export const SliderArrows: FunctionComponent = () => (
  <div className="slider__arrows" data-glide-el="controls">
    <button
      className="slider__arrow slider__arrow--prev"
      data-glide-dir="|<"
      tabIndex={-1}
    >
      <Icon icon="chevron-left" />
    </button>
    <button
      className="slider__arrow slider__arrow--next"
      data-glide-dir="|>"
      tabIndex={-1}
    >
      <Icon icon="chevron-right" />
    </button>
  </div>
);
