import { forwardRef, createElement, createContext, useContext } from 'react';
import { DividerComponent, type DividerProps } from './DividerComponent';
import './divider.scss';

export { DividerProps };
export const DividerContextDefault = forwardRef(DividerComponent);
export const DividerContext = createContext(DividerContextDefault);
export const Divider: typeof DividerContextDefault = forwardRef((props, ref) =>
  createElement(useContext(DividerContext), { ...props, ref })
);
