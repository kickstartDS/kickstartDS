import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { TeaserRowComponent } from './TeaserRowComponent';
import type { TeaserRowProps } from './TeaserRowComponent';
import './teaser-row.scss';

export { TeaserRowProps };
export const TeaserRowContextDefault = forwardRef(TeaserRowComponent);
export const TeaserRowContext = createContext(TeaserRowContextDefault);
export const TeaserRow = withContainer('teaser-row', TeaserRowContext);
