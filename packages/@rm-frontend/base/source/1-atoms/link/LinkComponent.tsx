import {
  ForwardRefRenderFunction,
  AnchorHTMLAttributes,
  forwardRef,
  createContext,
  useContext,
  Ref,
} from 'react';
import './link.scss';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  ref?: Ref<HTMLAnchorElement>;
};

const LinkComponent: ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = (
  { children, ...props },
  ref
) => (
  <a ref={ref} {...props}>
    {children}
  </a>
);

export const LinkContextDefault = forwardRef(LinkComponent);
export const LinkContext = createContext(LinkContextDefault);
export const Link: typeof LinkContextDefault = forwardRef((props, ref) => {
  const Compnent = useContext(LinkContext);
  return <Compnent {...props} ref={ref} />;
});
