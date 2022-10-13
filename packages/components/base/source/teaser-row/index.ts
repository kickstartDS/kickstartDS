import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/container';
import { TeaserRowComponent, type TeaserRowProps } from './TeaserRowComponent';
import './teaser-row.scss';

export { TeaserRowProps };
export const TeaserRowContextDefault = forwardRef(TeaserRowComponent);
export const TeaserRowContext = createContext(TeaserRowContextDefault);
export const TeaserRow = withContainer('teaser-row', TeaserRowContext);
