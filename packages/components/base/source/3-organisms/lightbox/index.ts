import { forwardRef, createElement, createContext, useContext } from 'react';
import { LightBoxComponent, LightBoxProps } from './LightBoxComponent';
import './lazyLightbox.js';
import './lightbox.scss';

export { LightBoxProps };
export const LightBoxContextDefault = forwardRef(LightBoxComponent);
export const LightBoxContext = createContext(LightBoxContextDefault);
export const LightBox: typeof LightBoxContextDefault = forwardRef(
  (props, ref) => createElement(useContext(LightBoxContext), { ...props, ref })
);
