import { forwardRef, createElement, createContext, useContext } from 'react';
import { DividerComponent } from './DividerComponent';
import './divider.scss';

export const DividerContextDefault = forwardRef(DividerComponent);
export const DividerContext = createContext(DividerContextDefault);
export const Divider: typeof DividerContextDefault = forwardRef((props, ref) =>
  createElement(useContext(DividerContext), { ...props, ref })
);
