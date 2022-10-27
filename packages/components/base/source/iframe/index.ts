import { forwardRef, createElement, createContext, useContext } from 'react';
import { IframeRatioComponent } from './IframeRatioComponent';
import type { IframeRatioProps } from './IframeRatioComponent';
import './iframe-ratio.scss';
import './lazyIframeRatio.js';

export { IframeRatioProps };
export const IframeRatioContextDefault = forwardRef(IframeRatioComponent);
export const IframeRatioContext = createContext(IframeRatioContextDefault);
export const IframeRatio: typeof IframeRatioContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(IframeRatioContext), { ...props, ref })
);
