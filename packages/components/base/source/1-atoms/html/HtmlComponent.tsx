import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { type HTMLProps } from './HtmlProps';

export { HTMLProps };
export const HtmlComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  HTMLProps & HTMLAttributes<HTMLDivElement>
> = ({ html, className, ...props }, ref) => (
  <div
    className={classNames('c-html', className)}
    dangerouslySetInnerHTML={{ __html: html }}
    ref={ref}
    {...props}
  />
);
