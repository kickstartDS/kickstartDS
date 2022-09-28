import { forwardRef, createElement, createContext, useContext } from 'react';
import { ContactComponent, type ContactProps } from './ContactComponent';
import './contact.scss';

export { ContactProps };
export const ContactContextDefault = forwardRef(ContactComponent);
export const ContactContext = createContext(ContactContextDefault);
export const Contact: typeof ContactContextDefault = forwardRef((props, ref) =>
  createElement(useContext(ContactContext), { ...props, ref })
);
