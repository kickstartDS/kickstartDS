import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { QuoteComponent } from './QuoteComponent';
import type { QuoteProps } from './QuoteComponent';
import './quote.scss';

export { QuoteProps };
export const QuoteContextDefault = forwardRef(QuoteComponent);
export const QuoteContext = createContext(QuoteContextDefault);
export const Quote = withContainer('quote', QuoteContext);
