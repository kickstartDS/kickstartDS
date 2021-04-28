import { FunctionComponent } from 'react';
import { Slider } from '@kickstartds/base/lib/slider';
import { Visual } from '../visual/VisualComponent';
import { VisualSliderProps } from './VisualSliderProps';
import './visual-slider.scss';

export const VisualSlider: FunctionComponent<VisualSliderProps> = ({
  slides,
}) => (
  <Slider autoplay={false} class="c-visual-slider">
    {slides?.map((slide, i) => (
      <Visual
        key={i}
        {...{
          ...slide,
          preview: (
            <div className="c-visual-slide--preview">
              {slide.label || `Slide ${i}`}
            </div>
          ),
        }}
      />
    ))}
  </Slider>
);
