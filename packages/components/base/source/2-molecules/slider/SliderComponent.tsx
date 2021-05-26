import { FunctionComponent, Children, ReactNode, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { SliderProps } from './SliderProps';
import { SlideContext } from './SlideContext';
import './slider.scss';
import './lazySlider.js';

type Slides = {
  preview?: ReactNode;
}[];

const slides = (children: ReactNode) => {
  const count = Children.count(children);
  return Children.map(children, (child, i) => (
    <div className="c-slider__slide" key={i}>
      <SlideContext.Provider
        value={{
          index: i,
          first: i === 0,
          last: i === count - 1,
        }}
      >
        {child}
      </SlideContext.Provider>
    </div>
  ));
};

export const Slider: FunctionComponent<
  SliderProps & HTMLAttributes<HTMLDivElement>
> = ({
  autoplay,
  className,
  component = 'base.slider',
  arrows,
  children,
  ...props
}) => (
  <div
    className={classnames(
      'c-slider',
      'lazyload',
      autoplay && 'c-slider--autoplay',
      className
    )}
    data-component={component}
    {...props}
  >
    <div className="c-slider-main" data-slider-arrows={arrows}>
      <div className="c-slider__track">
        <div className="c-slider__slides" data-glide-el="controls[nav]">
          {children && slides(children)}
        </div>
      </div>

      <div className="c-slider-nav">
        <div className="c-slider__track">
          <div
            className="c-slider__slides c-slider-nav__slides"
            data-glide-el="controls[nav]"
          >
            {children &&
              Children.map(children as Slides, (slide, i) => (
                <button
                  className="c-slider-nav__slide"
                  data-glide-dir={`=${i}`}
                  key={`slide-${i}`}
                >
                  {slide.preview || <span className="c-slider__bullet"></span>}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
