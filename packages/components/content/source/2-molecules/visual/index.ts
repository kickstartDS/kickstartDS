import { forwardRef, createElement, createContext, useContext } from 'react';
import { VisualComponent, type VisualProps } from './VisualComponent';
import './visual.scss';
import './Visual.js';

export { VisualProps };
export const VisualContextDefault = forwardRef(VisualComponent);
export const VisualContext = createContext(VisualContextDefault);
export const Visual: typeof VisualContextDefault = forwardRef((props, ref) =>
  createElement(useContext(VisualContext), { ...props, ref })
);
