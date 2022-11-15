import { forwardRef, createElement, createContext, useContext } from 'react';
import { CheckboxComponent } from './CheckboxComponent';
import type { CheckboxProps } from './CheckboxComponent';
import '../form-check.scss';

export { CheckboxProps };
export const CheckboxContextDefault = forwardRef(CheckboxComponent);
export const CheckboxContext = createContext(CheckboxContextDefault);
export const Checkbox: typeof CheckboxContextDefault = forwardRef(
  (props, ref) => createElement(useContext(CheckboxContext), { ...props, ref })
);
