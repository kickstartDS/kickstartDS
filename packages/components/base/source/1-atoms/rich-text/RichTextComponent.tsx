import {
  FunctionComponent,
  createContext,
  useContext,
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
  <div className={classnames('rich-text', className)} {...props}>
    {renderText(text)}
  </div>
);

export const RichTextContextDefault = RichTextComponent;
export const RichTextContext = createContext(RichTextContextDefault);
export const RichText: typeof RichTextContextDefault = (props) => {
  const Component = useContext(RichTextContext);
  return <Component {...props} />;
};
