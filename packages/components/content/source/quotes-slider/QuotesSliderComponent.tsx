import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { Slider } from '../slider';
import { Quote } from '../quote';
import { type QuotesSliderProps } from './QuotesSliderProps';

export { QuotesSliderProps };
export const QuotesSliderComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  QuotesSliderProps & HTMLAttributes<HTMLDivElement>
> = ({ slides, className, ...props }, ref) => (
  <Slider
    autoplay={false}
    component="content.quotes-slider"
    arrows="outer"
    className={classnames('quotes-slider', className)}
    ref={ref}
    {...props}
  >
    {slides?.map((slide, i) => (
      <Quote {...slide} key={i} />
    ))}
  </Slider>
);
