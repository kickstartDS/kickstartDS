import { forwardRef, createElement, createContext, useContext } from 'react';
import { QuotesSliderComponent } from './QuotesSliderComponent';
import type { QuotesSliderProps } from './QuotesSliderComponent';
import './lazyQuotesSlider.js';

export { QuotesSliderProps };
export const QuotesSliderContextDefault = forwardRef(QuotesSliderComponent);
export const QuotesSliderContext = createContext(QuotesSliderContextDefault);
export const QuotesSlider: typeof QuotesSliderContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(QuotesSliderContext), { ...props, ref })
);
