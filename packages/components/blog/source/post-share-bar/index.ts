import { forwardRef, createElement, createContext, useContext } from 'react';
import { PostShareBarComponent } from './PostShareBarComponent';
import './post-share-bar.scss';

export const PostShareBarContextDefault = forwardRef(PostShareBarComponent);
export const PostShareBarContext = createContext(PostShareBarContextDefault);
export const PostShareBar: typeof PostShareBarContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(PostShareBarContext), { ...props, ref })
);
