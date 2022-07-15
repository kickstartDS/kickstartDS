import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/container';
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
export const CollapsibleBox = withContainer(
  'collapsible-box',
  CollapsibleBoxContext
);
