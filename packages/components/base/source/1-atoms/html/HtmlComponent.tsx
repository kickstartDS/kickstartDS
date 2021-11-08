import {
  FunctionComponent,
  HTMLAttributes,
  createContext,
  useContext,
} from 'react';
import classNames from 'classnames';
import { HTMLProps } from './HtmlProps';

export const HtmlComponent: FunctionComponent<
  HTMLProps & HTMLAttributes<HTMLDivElement>
> = ({ html, className, ...props }) => (
  <div
    className={classNames('c-html', className)}
    dangerouslySetInnerHTML={{ __html: html }}
    {...props}
  />
);

export const HtmlContextDefault = HtmlComponent;
export const HtmlContext = createContext(HtmlContextDefault);
export const Html: typeof HtmlContextDefault = (props) => {
  const Component = useContext(HtmlContext);
  return <Component {...props} />;
};
