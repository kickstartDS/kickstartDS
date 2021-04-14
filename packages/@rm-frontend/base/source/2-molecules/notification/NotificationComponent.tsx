import { FunctionComponent } from 'react';

interface NotificationProps {
  type: string;
  'server-rendered': boolean;
  title?: string;
  message: string;
}

export const Notification: FunctionComponent<NotificationProps> = ({
  type,
  'server-rendered': serverRendered,
  title,
  message,
}) => (
  <div
    className={`notification notification--${type}`}
    role="alertdialog"
    data-component={serverRendered ? undefined : 'base.notification'}
    style={serverRendered ? undefined : { height: 0 }}
  >
    <div className="notification__content" role="document" tabIndex={0}>
      {title ? <h3>{title}</h3> : ''}
      <div dangerouslySetInnerHTML={{ __html: message }}></div>
    </div>
  </div>
);
