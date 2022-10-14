import { forwardRef, createElement, createContext, useContext } from 'react';
import { TextFieldComponent } from './TextFieldComponent';
import type { TextFieldProps } from './TextFieldComponent';
import '../form-field.scss';

export { TextFieldProps };
export const TextFieldContextDefault = forwardRef(TextFieldComponent);
export const TextFieldContext = createContext(TextFieldContextDefault);
export const TextField: typeof TextFieldContextDefault = forwardRef(
  (props, ref) => createElement(useContext(TextFieldContext), { ...props, ref })
);
