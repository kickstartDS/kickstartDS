import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/core';
import { type TableProps as TableSchemaProps } from './TableProps';
import './table.scss';
import './ResponsiveTable.js';

export type TableProps = TableSchemaProps & {
  renderHead?: typeof defaultRenderFn;
  renderCell?: typeof defaultRenderFn;
  renderCaption?: typeof defaultRenderFn;
};

export const TableComponent: ForwardRefRenderFunction<
  HTMLTableElement,
  TableProps & HTMLAttributes<HTMLTableElement>
> = (
  {
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
  },
  ref
) => {
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
      ref={ref}
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
