import { forwardRef, createElement, createContext, useContext } from 'react';
import { LogoTilesComponent, type LogoTilesProps } from './LogoTilesComponent';
import './logo-tiles.scss';

export { LogoTilesProps };
export const LogoTilesContextDefault = forwardRef(LogoTilesComponent);
export const LogoTilesContext = createContext(LogoTilesContextDefault);
export const LogoTiles: typeof LogoTilesContextDefault = forwardRef(
  (props, ref) => createElement(useContext(LogoTilesContext), { ...props, ref })
);
