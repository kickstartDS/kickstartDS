import {
  ForwardRefRenderFunction,
  forwardRef,
  createContext,
  useContext,
} from 'react';
import classnames from 'classnames';
import { Icon } from '../../icon/IconComponent';
import { Link } from '../../link/LinkComponent';
import { LinkButtonProps } from './LinkButtonProps';
import './link-button.css';

const LinkButtonComponent: ForwardRefRenderFunction<
  HTMLAnchorElement,
  LinkButtonProps
> = (
  {
    label,
    href,
    variant = 'solid',
    size,
    className,
    fillAnimation,
    iconAnimation,
    id,
    itemprop,
    ariaLabelledby,
    dataComponent,
    newTab,
    icon,
    iconBefore,
    iconAfter,
    ...props
  },
  ref
) => (
  <Link
    href={href}
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
    id={id}
    itemProp={itemprop}
    aria-labelledby={ariaLabelledby}
    data-component={dataComponent}
    {...(newTab ? { target: '_blank', rel: 'noopener' } : {})}
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
  </Link>
);

export const LinkButtonContextDefault = forwardRef(LinkButtonComponent);
export const LinkButtonContext = createContext(LinkButtonContextDefault);
export const LinkButton: typeof LinkButtonContextDefault = forwardRef(
  (props, ref) => {
    const Component = useContext(LinkButtonContext);
    return <Component {...props} ref={ref} />;
  }
);
