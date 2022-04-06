import { forwardRef, createElement, createContext, useContext } from 'react';
import { TextMediaComponent, TextMediaProps } from './TextMediaComponent';
import './text-media.scss';

export { TextMediaProps };
export const TextMediaContextDefault = forwardRef(TextMediaComponent);
export const TextMediaContext = createContext(TextMediaContextDefault);
export const TextMedia: typeof TextMediaContextDefault = forwardRef(
  (props, ref) => createElement(useContext(TextMediaContext), { ...props, ref })
);
