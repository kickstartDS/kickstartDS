import { FunctionComponent } from 'react';
import { Slider } from '@rm-frontend/base/lib/slider';
import { Visual } from '../visual/VisualComponent';
import { VisualSliderProps } from './VisualSliderProps';

export const VisualSlider: FunctionComponent<VisualSliderProps> = ({
  slides,
}) => (
  <Slider autoplay={false} class="visual-slider">
    {slides?.map((slide, i) => (
      <Visual
        key={i}
        {...{
          ...slide,
          preview: (
            <div className="visual-slide--preview">
              {slide.label || `Slide ${i}`}
            </div>
          ),
        }}
      />
    ))}
  </Slider>
);
