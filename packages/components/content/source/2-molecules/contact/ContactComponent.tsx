import {
  createContext,
  FunctionComponent,
  useContext,
  HTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { Picture } from '@kickstartds/base/lib/picture';
import { Headline } from '@kickstartds/base/lib/headline';
import { RichText } from '@kickstartds/base/lib/rich-text';
import { Icon } from '@kickstartds/base/lib/icon';
import { ContactProps } from './ContactProps';
import './contact.scss';

const ContactComponent: FunctionComponent<
  ContactProps & HTMLAttributes<HTMLElement>
> = ({ image, title, subtitle, phone, email, copy, className, ...props }) => (
  <address className={classnames('c-contact', className)} {...props}>
    {image && image.src ? (
      <div className="c-contact__image">
        <Picture {...image} />
      </div>
    ) : (
      ''
    )}
    <div className="c-contact__body">
      {title && <Headline level="h3" content={title} subheadline={subtitle} />}
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

export const ContactContextDefault = ContactComponent;
export const ContactContext = createContext(ContactContextDefault);
export const Contact: typeof ContactContextDefault = (props) => {
  const Component = useContext(ContactContext);
  return <Component {...props} />;
};
