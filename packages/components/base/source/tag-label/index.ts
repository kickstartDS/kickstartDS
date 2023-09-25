import { forwardRef, createElement, createContext, useContext } from 'react';
import { TagLabelComponent } from './TagLabelComponent';
import './tag-label.scss';
import './lazyTagLabel.js';

export const TagLabelContextDefault = forwardRef(TagLabelComponent);
export const TagLabelContext = createContext(TagLabelContextDefault);
export const TagLabel: typeof TagLabelContextDefault = forwardRef(
  (props, ref) => createElement(useContext(TagLabelContext), { ...props, ref })
);
