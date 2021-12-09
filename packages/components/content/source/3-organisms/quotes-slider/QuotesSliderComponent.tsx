import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import classnames from 'classnames';
import { Slider } from '@kickstartds/base/lib/slider';
import { Quote } from '../../2-molecules/quote/QuoteComponent';
import { QuotesSliderProps } from './QuotesSliderProps';
import './QuotesSlider.js';

const QuotesSliderComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  QuotesSliderProps & HTMLAttributes<HTMLDivElement>
> = ({ slides, className, ...props }, ref) => (
  <Slider
    autoplay={false}
    component="quotes.quotes-slider"
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

export const QuotesSliderContextDefault = forwardRef(QuotesSliderComponent);
export const QuotesSliderContext = createContext(QuotesSliderContextDefault);
export const QuotesSlider: typeof QuotesSliderContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(QuotesSliderContext), { ...props, ref })
);
