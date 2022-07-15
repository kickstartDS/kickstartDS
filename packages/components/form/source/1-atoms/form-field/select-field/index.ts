import { forwardRef, createElement, createContext, useContext } from 'react';
import {
  SelectFieldComponent,
  type SelectFieldProps,
} from './SelectFieldComponent';
import '../form-field.scss';

export { SelectFieldProps };
export const SelectFieldContextDefault = forwardRef(SelectFieldComponent);
export const SelectFieldContext = createContext(SelectFieldContextDefault);
export const SelectField: typeof SelectFieldContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(SelectFieldContext), { ...props, ref })
);
