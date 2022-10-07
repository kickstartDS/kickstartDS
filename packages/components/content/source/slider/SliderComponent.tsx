import {
  ReactElement,
  ReactNode,
  ForwardRefRenderFunction,
  HTMLAttributes,
  Children,
} from 'react';
import classnames from 'classnames';
import { type SliderProps } from './SliderProps';
import { SlideContext } from './SlideContext';

type Slides = ReactElement<{
  preview?: ReactNode;
}>[];

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

export { SliderProps };

export const SliderComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  SliderProps & HTMLAttributes<HTMLDivElement>
> = (
  {
    autoplay,
    className,
    component = 'content.slider',
    arrows,
    children,
    ...props
  },
  ref
) => (
  <div
    className={classnames(
      'c-slider',
      'lazyload',
      autoplay && 'c-slider--autoplay',
      className
    )}
    data-component={component}
    ref={ref}
    {...props}
  >
    <div className="c-slider-main" data-slider-arrows={arrows}>
      <div className="c-slider__track">
        <div className="c-slider__slides" data-glide-el="controls[nav]">
          {children && slides(children)}
        </div>
      </div>

      <div className="c-slider-nav" data-slider-arrows="none">
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
                  title={`slide ${i + 1}`}
                >
                  {slide.props.preview || (
                    <span className="c-slider__bullet"></span>
                  )}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);