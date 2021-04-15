import { FunctionComponent } from 'react';
import { Slider } from '@rm-frontend/base/lib/slider';
import { Quote } from '../../2-molecules/quote/QuoteComponent';
import { QuotesSliderProps } from './QuotesSliderProps';

export const QuotesSlider: FunctionComponent<QuotesSliderProps> = ({
  slides,
}) => (
  <Slider
    autoplay={false}
    component="quotes.quotes-slider"
    arrows="outer"
    className="quotes-slider"
  >
    {slides?.map((slide, i) => (
      <Quote {...slide} key={i} />
    ))}
  </Slider>
);
