import { forwardRef, createElement, createContext, useContext } from 'react';
import { RadioGroupComponent } from './RadioGroupComponent';
import '../form-check-group.scss';

export const RadioGroupContextDefault = forwardRef(RadioGroupComponent);
export const RadioGroupContext = createContext(RadioGroupContextDefault);
export const RadioGroup: typeof RadioGroupContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(RadioGroupContext), { ...props, ref })
);
