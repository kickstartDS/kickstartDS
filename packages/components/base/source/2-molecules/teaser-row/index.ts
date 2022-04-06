import { forwardRef, createElement, createContext, useContext } from 'react';
import { TeaserRowComponent, TeaserRowProps } from './TeaserRowComponent';
import './teaser-row.scss';

export { TeaserRowProps };
export const TeaserRowContextDefault = forwardRef(TeaserRowComponent);
export const TeaserRowContext = createContext(TeaserRowContextDefault);
export const TeaserRow: typeof TeaserRowContextDefault = forwardRef(
  (props, ref) => createElement(useContext(TeaserRowContext), { ...props, ref })
);
