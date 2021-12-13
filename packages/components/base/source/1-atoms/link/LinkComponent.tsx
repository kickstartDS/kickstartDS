import {
  ForwardRefRenderFunction,
  AnchorHTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';

const LinkComponent: ForwardRefRenderFunction<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
> = (props, ref) => <a ref={ref} {...props} />;

export const LinkContextDefault = forwardRef(LinkComponent);
export const LinkContext = createContext(LinkContextDefault);
export const Link: typeof LinkContextDefault = forwardRef((props, ref) =>
  createElement(useContext(LinkContext), { ...props, ref })
);
