import { FunctionComponent, createContext, useContext } from 'react';
import classnames from 'classnames';
import { TableProps } from './TableProps';
import './table.scss';

const TableComponent: FunctionComponent<TableProps> = ({
  caption,
  rows,
  colHead,
  rowHead,
  className,
  ...props
}) => (
  <table className={classnames('c-table', className)} {...props}>
    {caption && <caption>{caption}</caption>}
    {rowHead && (
      <thead>
        <tr>
          {rows?.shift().map((cell) => (
            <th>{cell}</th>
          ))}
        </tr>
      </thead>
    )}
    <tbody>
      {rows?.map((row) => (
        <tr>
          {row?.map((cell, index) =>
            colHead && index === 0 ? <th>{cell}</th> : <td>{cell}</td>
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
