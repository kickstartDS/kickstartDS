import { forwardRef, createElement, createContext, useContext } from 'react';
import {
  VisualSliderComponent,
  VisualSliderProps,
} from './VisualSliderComponent';
import './visual-slider.scss';

export { VisualSliderProps };
export const VisualSliderContextDefault = forwardRef(VisualSliderComponent);
export const VisualSliderContext = createContext(VisualSliderContextDefault);
export const VisualSlider: typeof VisualSliderContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(VisualSliderContext), { ...props, ref })
);
