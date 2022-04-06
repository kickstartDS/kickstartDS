import { ForwardRefRenderFunction, AnchorHTMLAttributes } from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { Icon } from '../../icon';
import { Link } from '../../link';
import { LinkButtonProps as LinkButtonSchemaProps } from './LinkButtonProps';

export type LinkButtonProps = LinkButtonSchemaProps & {
  renderLabel?: renderFn;
};

export const LinkButtonComponent: ForwardRefRenderFunction<
  HTMLAnchorElement,
  LinkButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>
> = (
  {
    label,
    href,
    variant = 'solid',
    size,
    className,
    fillAnimation,
    iconAnimation,
    dataComponent,
    newTab,
    icon,
    iconBefore,
    iconAfter,
    renderLabel = defaultRenderFn,
    ...props
  },
  ref
) => (
  <Link
    href={href}
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
    data-component={dataComponent}
    {...(newTab ? { target: '_blank', rel: 'noopener' } : {})}
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
  </Link>
);
