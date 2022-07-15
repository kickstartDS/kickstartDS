import { ForwardRefRenderFunction, AnchorHTMLAttributes } from 'react';

export type LinkProps = unknown;
export const LinkComponent: ForwardRefRenderFunction<
  HTMLAnchorElement,
  LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
> = (props, ref) => <a ref={ref} {...props} />;
