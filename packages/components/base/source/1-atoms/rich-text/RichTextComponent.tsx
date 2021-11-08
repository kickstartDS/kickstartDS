import {
  FunctionComponent,
  createContext,
  useContext,
  createElement,
  HTMLAttributes,
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

const RichTextComponent: FunctionComponent<
  RichTextProps & HTMLAttributes<HTMLDivElement>
> = ({ text, renderText = defaultRenderFn, className, ...props }) => (
  <div className={classnames('c-rich-text', className)} {...props}>
    {renderText(text)}
  </div>
);

export const RichTextContextDefault = RichTextComponent;
export const RichTextContext = createContext(RichTextContextDefault);
export const RichText: typeof RichTextContextDefault = (props) =>
  createElement(useContext(RichTextContext), props);
