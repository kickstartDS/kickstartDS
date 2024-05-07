import {
  ForwardRefRenderFunction,
  ElementType,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { Link } from '../link';
import { Icon } from '../icon';
import type { ButtonProps as ButtonSchemaProps } from './typing';

export type ButtonProps = ButtonSchemaProps & {
  renderLabel?: typeof defaultRenderFn;
};

export const ButtonComponent: ForwardRefRenderFunction<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps &
    (
      | ButtonHTMLAttributes<HTMLButtonElement>
      | AnchorHTMLAttributes<HTMLAnchorElement>
    )
> = (
  {
    label,
    type = 'button',
    variant = 'solid',
    inverted,
    size = 'medium',
    href,
    newTab,
    className,
    fillAnimation,
    iconAnimation,
    component,
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
          'c-button--medium': size === 'medium',
          'c-button--large': size === 'large',
          'c-button--fill-animation': fillAnimation,
          'c-button--icon-animation': iconAnimation,
          'c-button--disabled': isLink && disabled,
        },
        className
      )}
      ks-inverted={inverted?.toString()}
      ks-component={component}
      {...(isLink && newTab ? { target: '_blank', rel: 'noopener' } : {})}
      disabled={isLink ? undefined : disabled}
      ref={ref}
      {...props}
    >
      {iconBefore?.icon && <Icon {...iconBefore} />}
      {label && <span>{renderLabel(label)}</span>}
      {iconAfter?.icon && <Icon {...iconAfter} />}
    </Tag>
  );
};
