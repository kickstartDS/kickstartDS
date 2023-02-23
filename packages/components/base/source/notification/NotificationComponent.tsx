import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { Icon } from '../icon';
import { Link } from '../link';
import { RichText } from '../rich-text';
import { NotificationProps as NotificationSchemaProps } from './NotificationProps';
import { Button } from '../button';

export type NotificationProps = NotificationSchemaProps & {
  renderTitle?: typeof defaultRenderFn;
};

export const NotificationComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  NotificationProps & HTMLAttributes<HTMLDivElement>
> = (
  {
    type,
    title,
    renderTitle = defaultRenderFn,
    actions,
    component,
    message,
    className,
    children,
    ...props
  },
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
        <Icon className="c-notification__icon" icon="error" />
      ) : type === 'succes' ? (
        <Icon className="c-notification__icon" icon="succes" />
      ) : type === 'warning' ? (
        <Icon className="c-notification__icon" icon="warning" />
      ) : (
        ''
      )}
      <div className="c-notification__content">
        <div>
          {title ? (
            <span className="c-notification__title">{renderTitle(title)}</span>
          ) : (
            ''
          )}
          <RichText className="c-notification__message" text={message} />
        </div>
        {children}
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
