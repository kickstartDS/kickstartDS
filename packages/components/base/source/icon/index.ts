import { forwardRef, createElement, createContext, useContext } from 'react';
import { IconComponent } from './IconComponent';
import './icon.scss';

export const IconContextDefault = forwardRef(IconComponent);
export const IconContext = createContext(IconContextDefault);
export const Icon: typeof IconContextDefault = forwardRef((props, ref) =>
  createElement(useContext(IconContext), { ...props, ref })
);
