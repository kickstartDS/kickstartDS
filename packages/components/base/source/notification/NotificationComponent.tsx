import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
// import { defaultRenderFn } from '@kickstartds/core/lib/core';
// import { TextField } from '../../../form/source/form-field/text-field/TextFieldComponent';
import { Icon } from '../icon';
import { Link } from '../link';
import { RichText } from '../rich-text';
import { NotificationProps as NotificationSchemaProps } from './NotificationProps';
import { Button } from '../button';

// TODO: remove renderLabel

export type NotificationProps = NotificationSchemaProps & {
  // renderLabel?: typeof defaultRenderFn;
};

export const NotificationComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  NotificationProps & HTMLAttributes<HTMLDivElement>
> = (
  { type, title, actions, component, message, className, ...props },
  ref
) => (
  <>
    <div
      className={classnames(
        'c-notification',
        `c-notification--${type}`,
        className
      )}
      ks-component={component}
      ref={ref}
      {...props}
    >
      {type === 'info' ? (
        <Icon className="c-notification__icon" icon="info" />
      ) : type === 'error' ? (
        <Icon className="c-notification__icon" icon="close" />
      ) : type === 'succes' ? (
        <Icon className="c-notification__icon" icon="chevron-right" />
      ) : type === 'warning' ? (
        <Icon className="c-notification__icon" icon="chevron-right" />
      ) : (
        ''
      )}
      <div className="c-notification__content">
        <div>
          {title ? <span className="c-notification__title">{title}</span> : ''}
          <RichText className="c-notification__message" text={message} />
        </div>
        {/* {actions?.reply && (
          <div className="c-notification__reply">
            <TextField label="reply" />
            <Button size="small" variant="outline" label="Reply" />
          </div>
        )} */}
        {actions?.accept && (
          <div className="c-notification__accept">
            <Button size="small" label="Accept" />
            <Button size="small" variant="outline" label="Decline" />
          </div>
        )}
      </div>
      <div className="c-notification__actions">
        {actions?.undo && (
          <button className="c-notification__remove-btn" title="entfernen">
            <span>Undo</span>
          </button>
        )}
        {actions?.close && (
          <button className="c-notification__remove-btn" title="entfernen">
            <Icon className="c-notification__icon" icon="close" role="none" />
          </button>
        )}
      </div>
    </div>
  </>
);
