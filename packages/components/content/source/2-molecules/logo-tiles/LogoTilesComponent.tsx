import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import classnames from 'classnames';
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
export const LogoTiles: typeof LogoTilesContextDefault = forwardRef(
  (props, ref) => createElement(useContext(LogoTilesContext), { ...props, ref })
);
