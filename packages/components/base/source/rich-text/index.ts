import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { RichTextComponent, defaultRenderFn } from './RichTextComponent';
import type { RichTextProps } from './RichTextComponent';
import './rich-text.scss';

export { RichTextProps, defaultRenderFn };
export const RichTextContextDefault = forwardRef(RichTextComponent);
export const RichTextContext = createContext(RichTextContextDefault);
export const RichText = withContainer('rich-text', RichTextContext);
