import { forwardRef, createElement, createContext, useContext } from 'react';
import { CountUpComponent, CountUpProps } from './CountUpComponent';
import './count-up.scss';
import './CountUp.js';

export { CountUpProps };
export const CountUpContextDefault = forwardRef(CountUpComponent);
export const CountUpContext = createContext(CountUpContextDefault);
export const CountUp: typeof CountUpContextDefault = forwardRef((props, ref) =>
  createElement(useContext(CountUpContext), { ...props, ref })
);
