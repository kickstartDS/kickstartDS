import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createContext,
} from 'react';
import classnames from 'classnames';
import { withContainer } from '@kickstartds/core/lib/container';
import { Picture } from '@kickstartds/base/lib/picture';
import { LogoTilesProps } from './LogoTilesProps';
import './logo-tiles.scss';

const LogoTilesComponent: ForwardRefRenderFunction<
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

export const LogoTilesContextDefault = forwardRef(LogoTilesComponent);
export const LogoTilesContext = createContext(LogoTilesContextDefault);
export const LogoTiles = withContainer('logo-tiles', LogoTilesContext);
