import { FunctionComponent } from 'react';
import { Icon } from '../../../1-atoms/icon/PureIconComponent';

export const SliderArrows: FunctionComponent = () => (
  <div className="c-slider__arrows" data-glide-el="controls">
    <button
      className="c-slider__arrow c-slider__arrow--prev"
      data-glide-dir="|<"
      tabIndex={-1}
      title="previous slide"
    >
      <Icon icon="chevron-left" />
    </button>
    <button
      className="c-slider__arrow c-slider__arrow--next"
      data-glide-dir="|>"
      tabIndex={-1}
      title="next slide"
    >
      <Icon icon="chevron-right" />
    </button>
  </div>
);
