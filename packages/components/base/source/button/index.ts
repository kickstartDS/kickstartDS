import { forwardRef, createElement, createContext, useContext } from 'react';
import { ButtonComponent } from './ButtonComponent';
import './button.scss';

export const ButtonContextDefault = forwardRef(ButtonComponent);
export const ButtonContext = createContext(ButtonContextDefault);
export const Button: typeof ButtonContextDefault = forwardRef((props, ref) =>
  createElement(useContext(ButtonContext), { ...props, ref })
);
