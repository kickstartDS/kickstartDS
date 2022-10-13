import { forwardRef, createElement, createContext, useContext } from 'react';
import { IconComponent, type IconProps } from './IconComponent';
import './icon.scss';

export { IconProps };
export const IconContextDefault = forwardRef(IconComponent);
export const IconContext = createContext(IconContextDefault);
export const Icon: typeof IconContextDefault = forwardRef((props, ref) =>
  createElement(useContext(IconContext), { ...props, ref })
);
