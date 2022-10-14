import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { StorytellingComponent } from './StorytellingComponent';
import type { StorytellingProps } from './StorytellingComponent';
import './storytelling.scss';

export { StorytellingProps };
export const StorytellingContextDefault = forwardRef(StorytellingComponent);
export const StorytellingContext = createContext(StorytellingContextDefault);
export const Storytelling = withContainer('storytelling', StorytellingContext);
