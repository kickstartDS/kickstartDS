import { forwardRef, createElement, createContext, useContext } from 'react';
import { HtmlComponent } from './HtmlComponent';
import type { HTMLProps } from './HtmlComponent';

export { HTMLProps };
export const HtmlContextDefault = forwardRef(HtmlComponent);
export const HtmlContext = createContext(HtmlContextDefault);
export const Html: typeof HtmlContextDefault = forwardRef((props, ref) =>
  createElement(useContext(HtmlContext), { ...props, ref })
);
