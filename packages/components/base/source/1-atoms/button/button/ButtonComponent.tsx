import { ForwardRefRenderFunction, ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import { Icon } from '../../icon';
import { type ButtonProps } from './ButtonProps';

export { ButtonProps };

export const ButtonComponent: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = (
  {
    label,
    type = 'button',
    variant = 'solid',
    inverted,
    size,
    className,
    fillAnimation,
    iconAnimation,
    dataComponent,
    icon,
    iconBefore,
    iconAfter,
    ...props
  },
  ref
) => (
  <button
    type={type}
    className={classnames(
      'c-button',
      `c-button--${variant}`,
      {
        'c-button--small': size === 'small',
        'c-button--large': size === 'large',
        'c-button--fill-animation': fillAnimation,
        'c-button--icon-animation': iconAnimation,
      },
      className
    )}
    ks-inverted={inverted?.toString()}
    data-component={dataComponent}
    ref={ref}
    {...props}
  >
    {label ? (
      <>
        {icon && iconBefore && <Icon {...icon} />}
        <span>{label}</span>
        {icon && iconAfter && <Icon {...icon} />}
      </>
    ) : icon ? (
      <Icon {...icon} />
    ) : (
      ''
    )}
  </button>
);
