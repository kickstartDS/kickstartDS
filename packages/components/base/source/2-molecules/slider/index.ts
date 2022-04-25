import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { SliderComponent, type SliderProps } from './SliderComponent';
import './slider.scss';
import './lazySlider.js';

export { SliderProps };
export { SlideContext } from './SlideContext';
export const SliderContextDefault = forwardRef(SliderComponent);
export const SliderContext = createContext(SliderContextDefault);
export const Slider = withContainer('slider', SliderContext);
