import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { Picture } from '@kickstartds/base/lib/picture';
import type { LogoTilesProps } from './LogoTilesProps';

export { LogoTilesProps };
export const LogoTilesComponent: ForwardRefRenderFunction<
  HTMLUListElement,
  LogoTilesProps & HTMLAttributes<HTMLUListElement>
> = ({ logos, className, ...props }, ref) => (
  <ul className={classnames('c-logo-tiles', className)} ref={ref} {...props}>
    {logos &&
      logos.map((logo, index) => (
        <li className="c-logo-tiles__col" key={`logo-${index}`}>
          <Picture {...logo} />
        </li>
      ))}
  </ul>
);
