import { forwardRef, createElement, createContext, useContext } from 'react';
import { PostAsideComponent } from './PostAsideComponent';
import './post-aside.scss';

export const PostAsideContextDefault = forwardRef(PostAsideComponent);
export const PostAsideContext = createContext(PostAsideContextDefault);
export const PostAside: typeof PostAsideContextDefault = forwardRef(
  (props, ref) => createElement(useContext(PostAsideContext), { ...props, ref })
);
