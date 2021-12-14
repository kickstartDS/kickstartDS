import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import classNames from 'classnames';
import { HTMLProps } from './HtmlProps';

export const HtmlComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  HTMLProps & HTMLAttributes<HTMLDivElement>
> = ({ html, className, ...props }, ref) => (
  <div
    className={classNames('c-html', className)}
    dangerouslySetInnerHTML={{ __html: html }}
    ref={ref}
    {...props}
  />
);

export const HtmlContextDefault = forwardRef(HtmlComponent);
export const HtmlContext = createContext(HtmlContextDefault);
export const Html: typeof HtmlContextDefault = forwardRef((props, ref) =>
  createElement(useContext(HtmlContext), { ...props, ref })
);
