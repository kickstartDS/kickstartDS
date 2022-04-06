import { forwardRef, createElement, createContext, useContext } from 'react';
import {
  CollapsibleBoxComponent,
  type CollapsibleBoxProps,
} from './CollapsibleBoxComponent';
import './collapsible-box.scss';
import './lazyCollapsibleBox.js';

export { CollapsibleBoxProps };
export const CollapsibleBoxContextDefault = forwardRef(CollapsibleBoxComponent);
export const CollapsibleBoxContext = createContext(
  CollapsibleBoxContextDefault
);
export const CollapsibleBox: typeof CollapsibleBoxContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(CollapsibleBoxContext), { ...props, ref })
);
