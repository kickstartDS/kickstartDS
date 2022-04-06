import { forwardRef, createElement, createContext, useContext } from 'react';
import { TableComponent, TableProps } from './TableComponent';
import './table.scss';
import './ResponsiveTable.js';

export { TableProps };
export const TableContextDefault = forwardRef(TableComponent);
export const TableContext = createContext(TableContextDefault);
export const Table: typeof TableContextDefault = forwardRef((props, ref) =>
  createElement(useContext(TableContext), { ...props, ref })
);
