import {
  createContext,
  FunctionComponent,
  useContext,
  HTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { Picture } from '@kickstartds/base/picture';
import { LogoTilesProps } from './LogoTilesProps';
import './logo-tiles.scss';

const LogoTilesComponent: FunctionComponent<
  LogoTilesProps & HTMLAttributes<HTMLUListElement>
> = ({ logos, className, ...props }) => (
  <ul className={classnames('c-logo-tiles', className)} {...props}>
    {logos &&
      logos.map((logo, index) => (
        <li className="c-logo-tiles__col" key={`logo-${index}`}>
          <Picture {...logo} />
        </li>
      ))}
  </ul>
);

export const LogoTilesContextDefault = LogoTilesComponent;
export const LogoTilesContext = createContext(LogoTilesContextDefault);
export const LogoTiles: typeof LogoTilesContextDefault = (props) => {
  const Component = useContext(LogoTilesContext);
  return <Component {...props} />;
};
