import {
  ForwardRefRenderFunction,
  AnchorHTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { Icon } from '../../icon';
import { Link } from '../../link';
import { LinkButtonProps } from './LinkButtonProps';
import '../button/button.scss';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const LinkButtonComponent: ForwardRefRenderFunction<
  HTMLAnchorElement,
  LinkButtonProps & RenderFunctions & AnchorHTMLAttributes<HTMLAnchorElement>
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
    inverted,
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
    ks-inverted={inverted?.toString()}
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

export const LinkButtonContextDefault = forwardRef(LinkButtonComponent);
export const LinkButtonContext = createContext(LinkButtonContextDefault);
export const LinkButton: typeof LinkButtonContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(LinkButtonContext), { ...props, ref })
);
