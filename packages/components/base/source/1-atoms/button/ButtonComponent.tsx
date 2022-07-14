import { ForwardRefRenderFunction, HTMLAttributes, ElementType } from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { Link } from '../link';
import { Icon } from '../icon';
import { type ButtonProps as ButtonSchemaProps } from './ButtonProps';

export type ButtonProps = ButtonSchemaProps & {
  renderLabel?: renderFn;
};

export const ButtonComponent: ForwardRefRenderFunction<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps & HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>
> = (
  {
    label,
    type = 'button',
    variant = 'solid',
    inverted,
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
      ks-inverted={inverted?.toString()}
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
