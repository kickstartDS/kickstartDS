import { forwardRef, createElement, createContext, useContext } from 'react';
import { PostMetaComponent } from './PostMetaComponent';
import './post-meta.scss';

export const PostMetaContextDefault = forwardRef(PostMetaComponent);
export const PostMetaContext = createContext(PostMetaContextDefault);
export const PostMeta: typeof PostMetaContextDefault = forwardRef(
  (props, ref) => createElement(useContext(PostMetaContext), { ...props, ref })
);
