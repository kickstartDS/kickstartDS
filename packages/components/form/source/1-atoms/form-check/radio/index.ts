import { forwardRef, createElement, createContext, useContext } from 'react';
import { RadioComponent, type RadioButtonProps } from './RadioComponent';
import '../form-check.scss';

export { RadioButtonProps };
export const RadioContextDefault = forwardRef(RadioComponent);
export const RadioContext = createContext(RadioContextDefault);
export const Radio: typeof RadioContextDefault = forwardRef((props, ref) =>
  createElement(useContext(RadioContext), { ...props, ref })
);
