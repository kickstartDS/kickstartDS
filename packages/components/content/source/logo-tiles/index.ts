import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { LogoTilesComponent } from './LogoTilesComponent';
import type { LogoTilesProps } from './LogoTilesComponent';
import './logo-tiles.scss';

export { LogoTilesProps };
export const LogoTilesContextDefault = forwardRef(LogoTilesComponent);
export const LogoTilesContext = createContext(LogoTilesContextDefault);
export const LogoTiles: typeof LogoTilesContextDefault = withContainer(
  'logo-tiles',
  LogoTilesContext
);
