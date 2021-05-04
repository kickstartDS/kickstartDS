import {
  FunctionComponent,
  createContext,
  useContext,
  HTMLAttributes,
} from 'react';
import ReactMarkdown from 'react-markdown';
import classnames from 'classnames';
import { renderFn } from '@kickstartds/core/lib/core';
import './rich-text.scss';

const defaultRenderFn = (t: string) => <ReactMarkdown children={t} />;

interface RichTextProps {
  text: string;
  renderText?: renderFn;
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
