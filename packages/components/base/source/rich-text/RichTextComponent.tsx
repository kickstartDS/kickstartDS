import { ForwardRefRenderFunction, HTMLAttributes, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import classnames from 'classnames';

export const defaultRenderFn = (t: string): ReactNode => (
  <ReactMarkdown children={t} />
);

export type RichTextProps = {
  text: string;
  renderText?: typeof defaultRenderFn;
};

export const RichTextComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  RichTextProps & HTMLAttributes<HTMLDivElement>
> = ({ text, renderText = defaultRenderFn, className, ...props }, ref) => (
  <div className={classnames('c-rich-text', className)} ref={ref} {...props}>
    {renderText(text)}
  </div>
);
