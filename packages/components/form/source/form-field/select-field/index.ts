import { forwardRef, createElement, createContext, useContext } from 'react';
import { SelectFieldComponent } from './SelectFieldComponent';
import '../form-field.scss';

export const SelectFieldContextDefault = forwardRef(SelectFieldComponent);
export const SelectFieldContext = createContext(SelectFieldContextDefault);
export const SelectField: typeof SelectFieldContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(SelectFieldContext), { ...props, ref })
);
