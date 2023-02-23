import { forwardRef, createElement, createContext, useContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { NotificationComponent } from './NotificationComponent';
import type { NotificationProps } from './NotificationComponent';
import './notification.scss';

export { NotificationProps };
export const NotificationContextDefault = forwardRef(NotificationComponent);
export const NotificationContext = createContext(NotificationContextDefault);
export const Notification = withContainer('notification', NotificationContext);
