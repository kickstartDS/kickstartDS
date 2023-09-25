import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { ContentBoxComponent } from './ContentBoxComponent';
import './content-box.scss';

export const ContentBoxContextDefault = forwardRef(ContentBoxComponent);
export const ContentBoxContext = createContext(ContentBoxContextDefault);
export const ContentBox = withContainer('content-box', ContentBoxContext);
