import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { DividerProps } from './DividerProps';

export { DividerProps };
export const DividerComponent: ForwardRefRenderFunction<
  HTMLHRElement,
  DividerProps & HTMLAttributes<HTMLHRElement>
> = ({ variant, className, ...props }, ref) => (
  <hr
    className={classNames(
      'c-divider',
      variant && variant !== 'default' && `c-divider--${variant}`,
      className
    )}
    ref={ref}
    {...props}
  />
);
