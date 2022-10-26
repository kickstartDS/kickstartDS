import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { ContentBoxComponent } from './ContentBoxComponent';
import type { ContentBoxProps } from './ContentBoxComponent';
import './content-box.scss';

export { ContentBoxProps };
export const ContentBoxContextDefault = forwardRef(ContentBoxComponent);
export const ContentBoxContext = createContext(ContentBoxContextDefault);
export const ContentBox = withContainer('content-box', ContentBoxContext);
