import { forwardRef, createElement, createContext, useContext } from 'react';
import {
  RichTextComponent,
  type RichTextProps,
  defaultRenderFn,
} from './RichTextComponent';
import './rich-text.scss';

export { RichTextProps, defaultRenderFn };
export const RichTextContextDefault = forwardRef(RichTextComponent);
export const RichTextContext = createContext(RichTextContextDefault);
export const RichText: typeof RichTextContextDefault = forwardRef(
  (props, ref) => createElement(useContext(RichTextContext), { ...props, ref })
);
