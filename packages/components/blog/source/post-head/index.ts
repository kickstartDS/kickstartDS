import { forwardRef, createElement, createContext, useContext } from 'react';
import { PostHeadComponent } from './PostHeadComponent';
import './post-head.scss';

export const PostHeadContextDefault = forwardRef(PostHeadComponent);
export const PostHeadContext = createContext(PostHeadContextDefault);
export const PostHead: typeof PostHeadContextDefault = forwardRef(
  (props, ref) => createElement(useContext(PostHeadContext), { ...props, ref })
);
