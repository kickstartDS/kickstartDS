import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/container';
import { VisualComponent, type VisualProps } from './VisualComponent';
import './visual.scss';
import './Visual.js';

export { VisualProps };
export const VisualContextDefault = forwardRef(VisualComponent);
export const VisualContext = createContext(VisualContextDefault);
export const Visual = withContainer('visual', VisualContext);
