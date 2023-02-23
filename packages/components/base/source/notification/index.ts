import { forwardRef, createElement, createContext, useContext } from 'react';
import { NotificationComponent } from './NotificationComponent';
import type { NotificationProps } from './NotificationComponent';
import './notification.scss';

export { NotificationProps };
export const NotificationContextDefault = forwardRef(NotificationComponent);
export const NotificationContext = createContext(NotificationContextDefault);
export const Notification: typeof NotificationContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(NotificationContext), { ...props, ref })
);
