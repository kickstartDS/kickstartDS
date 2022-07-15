import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { Picture } from '@kickstartds/base/picture';
import { Headline } from '@kickstartds/base/headline';
import { RichText } from '@kickstartds/base/rich-text';
import { Icon } from '@kickstartds/base/icon';
import { Link } from '@kickstartds/base/link';
import { type ContactProps } from './ContactProps';

export { ContactProps };
export const ContactComponent: ForwardRefRenderFunction<
  HTMLElement,
  ContactProps & HTMLAttributes<HTMLElement>
> = (
  { image, title, subtitle, links = [], copy, className, ...props },
  ref
) => (
  <address className={classnames('c-contact', className)} ref={ref} {...props}>
    {image && image.src ? (
      <div className="c-contact__image">
        <Picture {...image} />
      </div>
    ) : (
      ''
    )}
    <div className="c-contact__body">
      {title && (
        <Headline
          level="h3"
          content={title}
          subheadline={subtitle}
          align="left"
          spaceAfter="none"
        />
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
