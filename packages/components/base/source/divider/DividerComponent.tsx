import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classNames from 'classnames';
import type { DividerProps } from './DividerProps';

export { DividerProps };
export const DividerComponent: ForwardRefRenderFunction<
  HTMLHRElement,
  DividerProps & HTMLAttributes<HTMLHRElement>
> = ({ variant = 'default', className, component, ...props }, ref) => (
  <hr
    className={classNames(
      'c-divider',
      variant && variant !== 'default' && `c-divider--${variant}`,
      className
    )}
    ks-component={component}
    ref={ref}
    {...props}
  />
);
