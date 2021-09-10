import { FunctionComponent, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { HTMLProps } from './HtmlProps';

export const Html: FunctionComponent<
  HTMLProps & HTMLAttributes<HTMLDivElement>
> = ({ html, className, ...props }) => (
  <div
    className={classNames('c-html', className)}
    dangerouslySetInnerHTML={{ __html: html }}
    {...props}
  />
);
