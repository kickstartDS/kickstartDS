import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { TableComponent, type TableProps } from './TableComponent';
import './table.scss';
import './ResponsiveTable.js';

export { TableProps };
export const TableContextDefault = forwardRef(TableComponent);
export const TableContext = createContext(TableContextDefault);
export const Table = withContainer('table', TableContext);
