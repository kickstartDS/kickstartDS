import { forwardRef, createElement, createContext, useContext } from 'react';
import { SliderComponent, SliderProps } from './SliderComponent';
import './slider.scss';
import './lazySlider.js';

export { SliderProps };
export { SlideContext } from './SlideContext';
export const SliderContextDefault = forwardRef(SliderComponent);
export const SliderContext = createContext(SliderContextDefault);
export const Slider: typeof SliderContextDefault = forwardRef((props, ref) =>
  createElement(useContext(SliderContext), { ...props, ref })
);
