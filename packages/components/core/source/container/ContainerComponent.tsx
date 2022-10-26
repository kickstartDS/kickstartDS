import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  name?: string;
};

export const ContainerComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  ContainerProps
> = ({ name, className, ...props }, ref) => (
  <div
    ks-component="base.container"
    className={classnames(
      'l-container',
      name && `l-container--${name}`,
      className
    )}
    ref={ref}
    {...props}
  />
);
