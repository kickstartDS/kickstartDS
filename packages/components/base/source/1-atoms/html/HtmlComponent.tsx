import {
  FunctionComponent,
  HTMLAttributes,
  createContext,
  useContext,
  createElement,
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
export const Html: typeof HtmlContextDefault = (props) =>
  createElement(useContext(HtmlContext), props);
