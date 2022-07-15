import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/container';
import { TeaserBoxComponent, type TeaserBoxProps } from './TeaserBoxComponent';
import './teaser-box.scss';

export { TeaserBoxProps };
export const TeaserBoxContextDefault = forwardRef(TeaserBoxComponent);
export const TeaserBoxContext = createContext(TeaserBoxContextDefault);
export const TeaserBox = withContainer('teaser-box', TeaserBoxContext);
