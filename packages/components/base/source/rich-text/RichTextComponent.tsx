import { ForwardRefRenderFunction, HTMLAttributes, ReactNode } from 'react';
import Markdown from 'markdown-to-jsx';
import classnames from 'classnames';

export const defaultRenderFn = (t: string): ReactNode => (
  <Markdown children={t} />
);

export type RichTextProps = {
  text: string;
  renderText?: typeof defaultRenderFn;
  component?: string;
};

export const RichTextComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  RichTextProps & HTMLAttributes<HTMLDivElement>
> = (
  { text, renderText = defaultRenderFn, className, component, ...props },
  ref
) => (
  <div
    className={classnames('c-rich-text', className)}
    ks-component={component}
    ref={ref}
    {...props}
  >
    {renderText(text)}
  </div>
);
