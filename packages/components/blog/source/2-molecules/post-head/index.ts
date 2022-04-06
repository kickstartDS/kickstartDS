import { forwardRef, createElement, createContext, useContext } from 'react';
import { PostHeadComponent, PostHeadProps } from './PostHeadComponent';
import './post-head.scss';

export { PostHeadProps };
export const PostHeadContextDefault = forwardRef(PostHeadComponent);
export const PostHeadContext = createContext(PostHeadContextDefault);
export const PostHead: typeof PostHeadContextDefault = forwardRef(
  (props, ref) => createElement(useContext(PostHeadContext), { ...props, ref })
);
