import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classNames from 'classnames';
import type { HTMLProps } from './typing';

export { HTMLProps };
export const HtmlComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  HTMLProps & HTMLAttributes<HTMLDivElement>
> = ({ html, className, component, ...props }, ref) => (
  <div
    className={classNames('c-html', className)}
    dangerouslySetInnerHTML={{ __html: html }}
    ks-component={component}
    ref={ref}
    {...props}
  />
);
