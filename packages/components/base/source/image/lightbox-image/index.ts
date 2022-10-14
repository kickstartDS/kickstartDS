import { forwardRef, createContext, createElement, useContext } from 'react';
import { LightboxImageComponent } from './LightboxImageComponent';
import type { LightboxImageProps } from './LightboxImageComponent';
import './lightbox-image.scss';
import './lazyLightboxImage.js';

export { LightboxImageProps };
export const LightboxImageContextDefault = forwardRef(LightboxImageComponent);
export const LightboxImageContext = createContext(LightboxImageContextDefault);
export const LightboxImage: typeof LightboxImageContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(LightboxImageContext), { ...props, ref })
);
