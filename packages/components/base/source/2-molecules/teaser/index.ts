import { forwardRef, createElement, createContext, useContext } from 'react';
import { TeaserComponent, TeaserProps } from './TeaserComponent';
import './teaser.scss';
import './Teaser.js';

export { TeaserProps };
export const TeaserContextDefault = forwardRef(TeaserComponent);
export const TeaserContext = createContext(TeaserContextDefault);
export const Teaser: typeof TeaserContextDefault = forwardRef((props, ref) =>
  createElement(useContext(TeaserContext), { ...props, ref })
);
