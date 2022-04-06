import { forwardRef, createElement, createContext, useContext } from 'react';
import { QuoteComponent, QuoteProps } from './QuoteComponent';
import './quote.scss';

export { QuoteProps };
export const QuoteContextDefault = forwardRef(QuoteComponent);
export const QuoteContext = createContext(QuoteContextDefault);
export const Quote: typeof QuoteContextDefault = forwardRef((props, ref) =>
  createElement(useContext(QuoteContext), { ...props, ref })
);
