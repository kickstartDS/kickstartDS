import {
  FunctionComponent,
  createContext,
  useContext,
  HTMLAttributes,
  createElement,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { TableProps } from './TableProps';
import './table.scss';
import './ResponsiveTable.js';

interface RenderFunctions {
  renderHead?: renderFn;
  renderCell?: renderFn;
  renderCaption?: renderFn;
}

const TableComponent: FunctionComponent<
  TableProps & RenderFunctions & HTMLAttributes<HTMLTableElement>
> = ({
  caption,
  rows = [],
  colHead,
  rowHead,
  responsive,
  variant,
  className,
  renderHead = defaultRenderFn,
  renderCell = defaultRenderFn,
  renderCaption = defaultRenderFn,
  ...props
}) => {
  const bodyRows = [...rows];
  const headRows = rowHead ? bodyRows.shift() : [];
  return (
    <table
      className={classnames(
        'c-table',
        {
          'c-table--responsive': responsive,
          'c-table--border': variant === 'border',
          'c-table--zebra': variant === 'zebra',
        },
        className
      )}
      {...props}
      data-component={responsive ? 'base.responsive-table' : null}
    >
      {caption && <caption>{renderCaption(caption)}</caption>}
      {rowHead && (
        <thead>
          <tr>
            {headRows.map((cell, index) => (
              <th key={index}>{renderHead(cell)}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {bodyRows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) =>
              colHead && cellIndex === 0 ? (
                <th key={`${rowIndex}-${cellIndex}`}>{renderHead(cell)}</th>
              ) : (
                <td key={`${rowIndex}-${cellIndex}`}>{renderCell(cell)}</td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const TableContextDefault = TableComponent;
export const TableContext = createContext(TableContextDefault);
export const Table: typeof TableContextDefault = (props) =>
  createElement(useContext(TableContext), props);
