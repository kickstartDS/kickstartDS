import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import ReactMarkdown from 'react-markdown';
import classnames from 'classnames';
import { renderTextFn } from '@kickstartds/core/lib/core';

export const defaultRenderFn: renderTextFn = (t: string) => (
  <ReactMarkdown children={t} />
);

export type RichTextProps = {
  text: string;
  renderText?: renderTextFn;
};

export const RichTextComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  RichTextProps & HTMLAttributes<HTMLDivElement>
> = ({ text, renderText = defaultRenderFn, className, ...props }, ref) => (
  <div className={classnames('c-rich-text', className)} ref={ref} {...props}>
    {renderText(text)}
  </div>
);
