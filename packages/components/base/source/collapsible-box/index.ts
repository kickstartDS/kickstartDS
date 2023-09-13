import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { CollapsibleBoxComponent } from './CollapsibleBoxComponent';
import './collapsible-box.scss';
import './lazyCollapsibleBox.js';

export const CollapsibleBoxContextDefault = forwardRef(CollapsibleBoxComponent);
export const CollapsibleBoxContext = createContext(
  CollapsibleBoxContextDefault
);
export const CollapsibleBox = withContainer(
  'collapsible-box',
  CollapsibleBoxContext
);
