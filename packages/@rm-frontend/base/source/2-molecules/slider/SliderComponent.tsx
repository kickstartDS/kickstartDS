import { FunctionComponent, Children, ReactNode } from 'react';
import classnames from 'classnames';
import { SliderProps } from './SliderProps';
import { SlideContext } from './SlideContext';
import './slider.scss';

type Slides = {
  preview?: ReactNode;
}[];

const slides = (children: ReactNode) => {
  const count = Children.count(children);
  return Children.map(children, (child, i) => (
    <div className="slider__slide" key={i}>
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

export const Slider: FunctionComponent<SliderProps> = ({
  autoplay,
  className,
  component = 'base.slider',
  arrows,
  children,
}) => (
  <div
    className={classnames(
      'slider',
      'lazyload',
      autoplay && 'slider--autoplay',
      className
    )}
    data-component={component}
  >
    <div className="slider-main" data-slider-arrows={arrows}>
      <div className="slider__track">
        <div
          className="slider__slides slider-nav__slides"
          data-glide-el="controls[nav]"
        >
          {children && slides(children)}
        </div>
      </div>

      <div className="slider-nav">
        <div className="slider__track">
          <div
            className="slider__slides slider-nav__slides"
            data-glide-el="controls[nav]"
          >
            {children &&
              Children.map(children as Slides, (slide, i) => (
                <button
                  className="slider-nav__slide"
                  data-glide-dir={`=${i}`}
                  key={i}
                >
                  {slide.preview || <span className="slider__bullet"></span>}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
