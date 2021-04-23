import {
  ForwardRefRenderFunction,
  forwardRef,
  createContext,
  useContext,
  ButtonHTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { Icon } from '../../icon';
import { ButtonProps } from './ButtonProps';
import './button.scss';

const ButtonComponent: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = (
  {
    label,
    type = 'button',
    variant = 'solid',
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
      'button',
      `button--${variant}`,
      {
        'button--small': size === 'small',
        'button--large': size === 'large',
        'button--fill-animation': fillAnimation,
        'button--icon-animation': iconAnimation,
      },
      className
    )}
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

export const ButtonContextDefault = forwardRef(ButtonComponent);
export const ButtonContext = createContext(ButtonContextDefault);
export const Button: typeof ButtonContextDefault = forwardRef(
  (props, ref) => {
    const Component = useContext(ButtonContext);
    return <Component {...props} ref={ref} />;
  }
);
