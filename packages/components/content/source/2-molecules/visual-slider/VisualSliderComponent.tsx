import { FunctionComponent, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { Slider } from '@kickstartds/base/slider';
import { Visual } from '../visual/VisualComponent';
import { VisualSliderProps } from './VisualSliderProps';
import './visual-slider.scss';

export const VisualSlider: FunctionComponent<
  VisualSliderProps & HTMLAttributes<HTMLDivElement>
> = ({ slides, className, ...props }) => (
  <Slider
    autoplay={false}
    className={classnames('c-visual-slider', className)}
    {...props}
  >
    {slides?.map((slide, i) => (
      <Visual
        key={`slide-${i}`}
        {...{
          ...slide,
          preview: (
            <div className="c-visual-slide--preview">
              {slide.label || `Slide ${i + 1}`}
            </div>
          ),
        }}
      />
    ))}
  </Slider>
);
