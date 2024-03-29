import { forwardRef, createElement, createContext, useContext } from 'react';
import { PictureComponent } from './PictureComponent';

export const PictureContextDefault = forwardRef(PictureComponent);
export const PictureContext = createContext(PictureContextDefault);
export const Picture: typeof PictureContextDefault = forwardRef((props, ref) =>
  createElement(useContext(PictureContext), { ...props, ref })
);
