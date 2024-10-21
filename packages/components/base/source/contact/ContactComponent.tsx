import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { Picture } from '../picture';
import { Headline } from '../headline';
import { RichText } from '../rich-text';
import { Icon } from '../icon';
import { Link } from '../link';
import type { ContactProps } from './typing';

export { ContactProps };
export const ContactComponent: ForwardRefRenderFunction<
  HTMLElement,
  ContactProps & HTMLAttributes<HTMLElement>
> = (
  { image, name, title, links = [], copy, className, component, ...props },
  ref
) => (
  <address
    className={classnames('c-contact', className)}
    ks-component={component}
    ref={ref}
    {...props}
  >
    {image && image.src ? (
      <div className="c-contact__image">
        <Picture {...image} />
      </div>
    ) : (
      ''
    )}
    <div className="c-contact__body">
      {title && (
        <div className="c-contact__header">
          <span className="c-contact__name">{name}</span>
          <span className="c-contact__title">{title}</span>
        </div>
      )}
      {links.length ? (
        <ul className="c-contact__links">
          {links.map(({ icon, href, label, newTab }, i) => (
            <li key={i}>
              <Icon icon={icon} />
              <Link
                className="c-contact__link"
                href={href}
                {...(newTab ? { target: '_blank', rel: 'noopener' } : {})}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
      {copy && <RichText text={copy} className="c-contact__copy" />}
    </div>
  </address>
);
