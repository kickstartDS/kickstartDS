import { forwardRef, createElement, createContext, useContext } from 'react';
import { PostAsideComponent } from './PostAsideComponent';
import './post-aside.scss';
import { withContainer } from '@kickstartds/core/lib/container';

export const PostAsideContextDefault = forwardRef(PostAsideComponent);
export const PostAsideContext = createContext(PostAsideContextDefault);
export const PostAside = withContainer('post-aside', PostAsideContext);
