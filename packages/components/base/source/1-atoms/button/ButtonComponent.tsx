import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  ElementType,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { Link } from '../link';
import { Icon } from '../icon';
import { ButtonProps } from './ButtonProps';
import './button.scss';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const ButtonComponent: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps & RenderFunctions & HTMLAttributes<HTMLButtonElement>
> = (
  {
    label,
    type = 'button',
    variant = 'solid',
    size,
    href,
    newTab,
    className,
    fillAnimation,
    iconAnimation,
    dataComponent,
    icon,
    iconBefore,
    iconAfter,
    renderLabel = defaultRenderFn,
    disabled,
    ...props
  },
  ref
) => {
  const isLink = !!href;
  const Tag = isLink ? Link : ('button' as ElementType);
  return (
    <Tag
      type={isLink ? undefined : type}
      href={isLink ? href : undefined}
      className={classnames(
        'c-button',
        `c-button--${variant}`,
        {
          'c-button--small': size === 'small',
          'c-button--large': size === 'large',
          'c-button--fill-animation': fillAnimation,
          'c-button--icon-animation': iconAnimation,
          'c-button--disabled': isLink && disabled,
        },
        className
      )}
      data-component={dataComponent}
      {...(isLink && newTab ? { target: '_blank', rel: 'noopener' } : {})}
      ref={ref}
      {...props}
    >
      {label ? (
        <>
          {icon && iconBefore && <Icon {...icon} />}
          <span>{renderLabel(label)}</span>
          {icon && iconAfter && <Icon {...icon} />}
        </>
      ) : icon ? (
        <Icon {...icon} />
      ) : (
        ''
      )}
    </Tag>
  );
};

export const ButtonContextDefault = forwardRef(ButtonComponent);
export const ButtonContext = createContext(ButtonContextDefault);
export const Button: typeof ButtonContextDefault = forwardRef((props, ref) =>
  createElement(useContext(ButtonContext), { ...props, ref })
);
