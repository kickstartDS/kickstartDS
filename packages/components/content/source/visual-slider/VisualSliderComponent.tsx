import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Slider } from '../slider';
import { Visual } from '../visual';
import type { VisualSliderProps } from './VisualSliderProps';

export { VisualSliderProps };
export const VisualSliderComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  VisualSliderProps & HTMLAttributes<HTMLDivElement>
> = ({ slides, className, ...props }, ref) => (
  <Slider
    autoplay={false}
    className={classNames('c-visual-slider', className)}
    ref={ref}
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
