import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { BannerComponent } from './BannerComponent';
import type { BannerProps } from './BannerComponent';
import './banner.scss';

export { BannerProps };
export const BannerContextDefault = forwardRef(BannerComponent);
export const BannerContext = createContext(BannerContextDefault);
export const Banner = withContainer('banner', BannerContext);
