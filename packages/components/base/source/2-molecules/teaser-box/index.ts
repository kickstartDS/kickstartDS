import { forwardRef, createElement, createContext, useContext } from 'react';
import { TeaserBoxComponent, type TeaserBoxProps } from './TeaserBoxComponent';
import './teaser-box.scss';

export { TeaserBoxProps };
export const TeaserBoxContextDefault = forwardRef(TeaserBoxComponent);
export const TeaserBoxContext = createContext(TeaserBoxContextDefault);
export const TeaserBox: typeof TeaserBoxContextDefault = forwardRef(
  (props, ref) => createElement(useContext(TeaserBoxContext), { ...props, ref })
);
