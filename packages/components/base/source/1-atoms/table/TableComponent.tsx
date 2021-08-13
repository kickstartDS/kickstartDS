import { FunctionComponent, createContext, useContext } from 'react';
import classnames from 'classnames';
import { TableProps } from './TableProps';
import './table.scss';
import './ResponsiveTable.js';

const TableComponent: FunctionComponent<TableProps> = ({
  caption,
  rows,
  colHead,
  rowHead,
  responsive,
  variant,
  className,
  ...props
}) => (
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
    {caption && <caption>{caption}</caption>}
    {rowHead && (
      <thead>
        <tr>
          {rows?.shift().map((cell, index) => (
            <th key={index}>{cell}</th>
          ))}
        </tr>
      </thead>
    )}
    <tbody>
      {rows?.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row?.map((cell, cellIndex) =>
            colHead && cellIndex === 0 ? (
              <th key={`${rowIndex}-${cellIndex}`}>{cell}</th>
            ) : (
              <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
            )
          )}
        </tr>
      ))}
    </tbody>
  </table>
);

export const TableContextDefault = TableComponent;
export const TableContext = createContext(TableContextDefault);
export const Table: typeof TableContextDefault = (props) => {
  const Compnent = useContext(TableContext);
  return <Compnent {...props} />;
};
