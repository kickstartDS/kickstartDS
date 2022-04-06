import { forwardRef, createContext, createElement, useContext } from 'react';
import {
  LightboxLazyImageComponent,
  LightboxLazyImageProps,
} from './LightboxLazyImageComponent';
import './lightbox-image.scss';

export { LightboxLazyImageProps };
export const LightboxLazyImageContextDefault = forwardRef(
  LightboxLazyImageComponent
);
export const LightboxLazyImageContext = createContext(
  LightboxLazyImageContextDefault
);
export const LightboxLazyImage: typeof LightboxLazyImageContextDefault =
  forwardRef((props, ref) =>
    createElement(useContext(LightboxLazyImageContext), { ...props, ref })
  );
