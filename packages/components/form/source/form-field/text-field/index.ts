import { forwardRef, createElement, createContext, useContext } from 'react';
import { TextFieldComponent } from './TextFieldComponent';
import '../form-field.scss';

export const TextFieldContextDefault = forwardRef(TextFieldComponent);
export const TextFieldContext = createContext(TextFieldContextDefault);
export const TextField: typeof TextFieldContextDefault = forwardRef(
  (props, ref) => createElement(useContext(TextFieldContext), { ...props, ref })
);
