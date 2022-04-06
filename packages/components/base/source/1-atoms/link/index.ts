import { forwardRef, createElement, createContext, useContext } from 'react';
import { LinkComponent, type LinkProps } from './LinkComponent';

export { LinkProps };
export const LinkContextDefault = forwardRef(LinkComponent);
export const LinkContext = createContext(LinkContextDefault);
export const Link: typeof LinkContextDefault = forwardRef((props, ref) =>
  createElement(useContext(LinkContext), { ...props, ref })
);
