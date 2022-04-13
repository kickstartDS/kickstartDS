import { forwardRef, createElement, createContext, useContext } from 'react';
import {
  QuotesSliderComponent,
  type QuotesSliderProps,
} from './QuotesSliderComponent';
import './QuotesSlider.js';

export { QuotesSliderProps };
export const QuotesSliderContextDefault = forwardRef(QuotesSliderComponent);
export const QuotesSliderContext = createContext(QuotesSliderContextDefault);
export const QuotesSlider: typeof QuotesSliderContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(QuotesSliderContext), { ...props, ref })
);
