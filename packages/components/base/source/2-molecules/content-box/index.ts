import { forwardRef, createElement, createContext, useContext } from 'react';
import {
  ContentBoxComponent,
  type ContentBoxProps,
} from './ContentBoxComponent';
import './content-box.scss';

export { ContentBoxProps };
export const ContentBoxContextDefault = forwardRef(ContentBoxComponent);
export const ContentBoxContext = createContext(ContentBoxContextDefault);
export const ContentBox: typeof ContentBoxContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(ContentBoxContext), { ...props, ref })
);
