import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { HeadlineComponent } from './HeadlineComponent';
import type { HeadlineProps } from './HeadlineComponent';
import './headline.scss';

export { HeadlineProps };
export const HeadlineContextDefault = forwardRef(HeadlineComponent);
export const HeadlineContext = createContext(HeadlineContextDefault);
export const Headline = withContainer('headline', HeadlineContext);
