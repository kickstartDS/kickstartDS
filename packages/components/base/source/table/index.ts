import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { TableComponent } from './TableComponent';
import './table.scss';
import './lazyResponsiveTable.js';

export const TableContextDefault = forwardRef(TableComponent);
export const TableContext = createContext(TableContextDefault);
export const Table = withContainer('table', TableContext);
