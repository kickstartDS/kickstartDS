import { forwardRef, createElement, createContext, useContext } from 'react';
import { TextAreaComponent } from './TextAreaComponent';
import '../form-field.scss';

export const TextAreaContextDefault = forwardRef(TextAreaComponent);
export const TextAreaContext = createContext(TextAreaContextDefault);
export const TextArea: typeof TextAreaContextDefault = forwardRef(
  (props, ref) => createElement(useContext(TextAreaContext), { ...props, ref })
);
