import { FunctionComponent, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { Slider } from '@kickstartds/base/slider';
import { Quote } from '../../2-molecules/quote/QuoteComponent';
import { QuotesSliderProps } from './QuotesSliderProps';
import './QuotesSlider.js';

export const QuotesSlider: FunctionComponent<
  QuotesSliderProps & HTMLAttributes<HTMLDivElement>
> = ({ slides, className, ...props }) => (
  <Slider
    autoplay={false}
    component="quotes.quotes-slider"
    arrows="outer"
    className={classnames('quotes-slider', className)}
    {...props}
  >
    {slides?.map((slide, i) => (
      <Quote {...slide} key={i} />
    ))}
  </Slider>
);
