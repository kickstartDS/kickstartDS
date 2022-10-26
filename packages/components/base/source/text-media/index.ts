import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { TextMediaComponent } from './TextMediaComponent';
import type { TextMediaProps } from './TextMediaComponent';
import './text-media.scss';

export { TextMediaProps };
export const TextMediaContextDefault = forwardRef(TextMediaComponent);
export const TextMediaContext = createContext(TextMediaContextDefault);
export const TextMedia = withContainer('text-media', TextMediaContext);
