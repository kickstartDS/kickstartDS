import { forwardRef, createElement, createContext, useContext } from 'react';
import { TeaserComponent } from './TeaserComponent';
import type { TeaserProps } from './TeaserComponent';
import './teaser.scss';
import './lazyTeaser.js';

export { TeaserProps };
export const TeaserContextDefault = forwardRef(TeaserComponent);
export const TeaserContext = createContext(TeaserContextDefault);
export const Teaser: typeof TeaserContextDefault = forwardRef((props, ref) =>
  createElement(useContext(TeaserContext), { ...props, ref })
);
