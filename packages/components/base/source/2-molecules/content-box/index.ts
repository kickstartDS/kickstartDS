import { forwardRef, createElement, createContext, useContext } from 'react';
import { ContentBoxComponent, ContentBoxProps } from './ContentBoxComponent';
import './content-box.scss';
import './ContentBox.js';

export { ContentBoxProps };
export const ContentBoxContextDefault = forwardRef(ContentBoxComponent);
export const ContentBoxContext = createContext(ContentBoxContextDefault);
export const ContentBox: typeof ContentBoxContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(ContentBoxContext), { ...props, ref })
);
