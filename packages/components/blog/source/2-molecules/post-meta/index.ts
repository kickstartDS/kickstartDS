import { forwardRef, createElement, createContext, useContext } from 'react';
import { PostMetaComponent, PostMetaProps } from './PostMetaComponent';
import './post-meta.scss';

export { PostMetaProps };
export const PostMetaContextDefault = forwardRef(PostMetaComponent);
export const PostMetaContext = createContext(PostMetaContextDefault);
export const PostMeta: typeof PostMetaContextDefault = forwardRef(
  (props, ref) => createElement(useContext(PostMetaContext), { ...props, ref })
);
