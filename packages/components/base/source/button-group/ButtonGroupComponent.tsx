import type { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import type { ButtonGroupProps } from './typing';
import { Button } from '../button';

export { ButtonGroupProps };

export const ButtonGroupComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  ButtonGroupProps & HTMLAttributes<HTMLDivElement>
> = (
  { items = [], arrangement = 'left', className, component, ...props },
  ref
) => (
  <div
    className={classnames(
      'c-button-group',
      `c-button-group--${arrangement}`,
      className
    )}
    ks-component={component}
    ref={ref}
    {...props}
  >
    {items.map((buttonProps, i) => (
      <Button
        {...buttonProps}
        className={classnames(buttonProps.className, 'c-button-group__item')}
        key={i}
      />
    ))}
  </div>
);
