import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import ReactMarkdown from 'react-markdown';
import classnames from 'classnames';
import { renderTextFn } from '@kickstartds/core/lib/core';
import './rich-text.scss';

export const defaultRenderFn: renderTextFn = (t) => (
  <ReactMarkdown children={t} />
);

interface RichTextProps {
  text: string;
  renderText?: renderTextFn;
}

const RichTextComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  RichTextProps & HTMLAttributes<HTMLDivElement>
> = ({ text, renderText = defaultRenderFn, className, ...props }, ref) => (
  <div className={classnames('c-rich-text', className)} ref={ref} {...props}>
    {renderText(text)}
  </div>
);

export const RichTextContextDefault = forwardRef(RichTextComponent);
export const RichTextContext = createContext(RichTextContextDefault);
export const RichText: typeof RichTextContextDefault = forwardRef(
  (props, ref) => createElement(useContext(RichTextContext), { ...props, ref })
);
