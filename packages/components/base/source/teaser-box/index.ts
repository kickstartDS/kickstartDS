import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { TeaserBoxComponent } from './TeaserBoxComponent';
import './teaser-box.scss';

export const TeaserBoxContextDefault = forwardRef(TeaserBoxComponent);
export const TeaserBoxContext = createContext(TeaserBoxContextDefault);
export const TeaserBox = withContainer('teaser-box', TeaserBoxContext);
