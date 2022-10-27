import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { VisualComponent } from './VisualComponent';
import type { VisualProps } from './VisualComponent';
import './visual.scss';
import './lazyVisual.js';

export { VisualProps };
export const VisualContextDefault = forwardRef(VisualComponent);
export const VisualContext = createContext(VisualContextDefault);
export const Visual = withContainer('visual', VisualContext);
