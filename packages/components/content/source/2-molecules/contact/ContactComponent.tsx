import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import classnames from 'classnames';
import { Picture } from '@kickstartds/base/lib/picture';
import { Headline } from '@kickstartds/base/lib/headline';
import { RichText } from '@kickstartds/base/lib/rich-text';
import { Icon } from '@kickstartds/base/lib/icon';
import { ContactProps } from './ContactProps';
import './contact.scss';

const ContactComponent: ForwardRefRenderFunction<
  HTMLElement,
  ContactProps & HTMLAttributes<HTMLElement>
> = (
  { image, title, subtitle, phone, email, copy, className, ...props },
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
      {phone || email ? (
        <ul className="c-contact__links">
          {phone && (
            <li>
              <Icon icon="phone" />
              <a className="c-contact__link" href={`tel:${phone}`}>
                {phone}
              </a>
            </li>
          )}
          {email && (
            <li>
              <Icon icon="email" />
              <a className="c-contact__link" href={`mailto:${email}`}>
                {email}
              </a>
            </li>
          )}
        </ul>
      ) : (
        ''
      )}
      {copy && <RichText text={copy} className="c-contact__copy" />}
    </div>
  </address>
);

export const ContactContextDefault = forwardRef(ContactComponent);
export const ContactContext = createContext(ContactContextDefault);
export const Contact: typeof ContactContextDefault = forwardRef((props, ref) =>
  createElement(useContext(ContactContext), { ...props, ref })
);
