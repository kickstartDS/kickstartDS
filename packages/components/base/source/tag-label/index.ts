import { forwardRef, createElement, createContext, useContext } from 'react';
import { TagLabelComponent } from './TagLabelComponent';
import type { TagLabelProps } from './TagLabelComponent';
import './tag-label.scss';
import './lazyTagLabel.js';

export { TagLabelProps };
export const TagLabelContextDefault = forwardRef(TagLabelComponent);
export const TagLabelContext = createContext(TagLabelContextDefault);
export const TagLabel: typeof TagLabelContextDefault = forwardRef(
  (props, ref) => createElement(useContext(TagLabelContext), { ...props, ref })
);
