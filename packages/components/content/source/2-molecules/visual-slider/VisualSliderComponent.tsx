import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import classNames from 'classnames';
import { Slider } from '@kickstartds/base/lib/slider';
import { Visual } from '../visual/VisualComponent';
import { VisualSliderProps } from './VisualSliderProps';
import './visual-slider.scss';

const VisualSliderComponent: ForwardRefRenderFunction<
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

export const VisualSliderContextDefault = forwardRef(VisualSliderComponent);
export const VisualSliderContext = createContext(VisualSliderContextDefault);
export const VisualSlider: typeof VisualSliderContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(VisualSliderContext), { ...props, ref })
);
