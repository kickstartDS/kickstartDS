import { forwardRef, createElement, createContext, useContext } from 'react';
import { BannerComponent } from './BannerComponent';
import type { BannerProps } from './BannerComponent';
import './banner.scss';

export { BannerProps };
export const BannerContextDefault = forwardRef(BannerComponent);
export const BannerContext = createContext(BannerContextDefault);
export const Banner: typeof BannerContextDefault = forwardRef((props, ref) =>
  createElement(useContext(BannerContext), { ...props, ref })
);
