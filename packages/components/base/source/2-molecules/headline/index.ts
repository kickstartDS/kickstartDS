import { forwardRef, createElement, createContext, useContext } from 'react';
import { HeadlineComponent, type HeadlineProps } from './HeadlineComponent';
import './headline.scss';

export { HeadlineProps };
export const HeadlineContextDefault = forwardRef(HeadlineComponent);
export const HeadlineContext = createContext(HeadlineContextDefault);
export const Headline: typeof HeadlineContextDefault = forwardRef(
  (props, ref) => createElement(useContext(HeadlineContext), { ...props, ref })
);
