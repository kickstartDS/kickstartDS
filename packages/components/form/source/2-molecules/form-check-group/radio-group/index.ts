import { forwardRef, createElement, createContext, useContext } from 'react';
import {
  RadioGroupComponent,
  type RadioGroupProps,
} from './RadioGroupComponent';
import '../form-check-group.scss';

export { RadioGroupProps };
export const RadioGroupContextDefault = forwardRef(RadioGroupComponent);
export const RadioGroupContext = createContext(RadioGroupContextDefault);
export const RadioGroup: typeof RadioGroupContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(RadioGroupContext), { ...props, ref })
);
