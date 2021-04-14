import { FunctionComponent, createContext, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import classnames from 'classnames';
import './rich-text.css';

interface RichTextProps {
  className?: string;
  text: string;
}

const RichTextComponent: FunctionComponent<RichTextProps> = ({
  text,
  className,
}) => (
  <div className={classnames('rich-text', className)}>
    <ReactMarkdown children={text} />
  </div>
);

export const RichTextContextDefault = RichTextComponent;
export const RichTextContext = createContext(RichTextContextDefault);
export const RichText: typeof RichTextContextDefault = (props) => {
  const Component = useContext(RichTextContext);
  return <Component {...props} />;
};
