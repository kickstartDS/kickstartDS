import { forwardRef, createElement, createContext, useContext } from 'react';
import {
  TagLabelContainerComponent,
  TagLabelContainerProps,
} from './TagLabelContainerComponent';
import './tag-label-container.scss';

export { TagLabelContainerProps };
export const TagLabelContainerContextDefault = forwardRef(
  TagLabelContainerComponent
);
export const TagLabelContainerContext = createContext(
  TagLabelContainerContextDefault
);
export const TagLabelContainer: typeof TagLabelContainerContextDefault =
  forwardRef((props, ref) =>
    createElement(useContext(TagLabelContainerContext), { ...props, ref })
  );
