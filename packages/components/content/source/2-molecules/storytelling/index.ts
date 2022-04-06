import { forwardRef, createElement, createContext, useContext } from 'react';
import {
  StorytellingComponent,
  type StorytellingProps,
} from './StorytellingComponent';
import './storytelling.scss';

export { StorytellingProps };
export const StorytellingContextDefault = forwardRef(StorytellingComponent);
export const StorytellingContext = createContext(StorytellingContextDefault);
export const Storytelling: typeof StorytellingContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(StorytellingContext), { ...props, ref })
);
