import { forwardRef, createElement, createContext, useContext } from 'react';
import {
  CheckboxGroupComponent,
  type CheckboxGroupProps,
} from './CheckboxGroupComponent';
import '../form-check-group.scss';

export { CheckboxGroupProps };
export const CheckboxGroupContextDefault = forwardRef(CheckboxGroupComponent);
export const CheckboxGroupContext = createContext(CheckboxGroupContextDefault);
export const CheckboxGroup: typeof CheckboxGroupContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(CheckboxGroupContext), { ...props, ref })
);
