import { forwardRef, createElement, createContext, useContext } from 'react';
import { PostTeaserComponent, PostTeaserProps } from './PostTeaserComponent';
import './post-teaser.scss';

export { PostTeaserProps };
export const PostTeaserContextDefault = forwardRef(PostTeaserComponent);
export const PostTeaserContext = createContext(PostTeaserContextDefault);
export const PostTeaser: typeof PostTeaserContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(PostTeaserContext), { ...props, ref })
);
