import { forwardRef, createElement, createContext, useContext } from 'react';
import {
  LinkButtonComponent,
  type LinkButtonProps,
} from './LinkButtonComponent';
import '../button/button.scss';

export { LinkButtonProps };
export const LinkButtonContextDefault = forwardRef(LinkButtonComponent);
export const LinkButtonContext = createContext(LinkButtonContextDefault);
export const LinkButton: typeof LinkButtonContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(LinkButtonContext), { ...props, ref })
);
