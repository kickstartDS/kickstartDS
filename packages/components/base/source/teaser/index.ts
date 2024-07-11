import { forwardRef, createElement, createContext, useContext } from 'react';
import { TeaserComponent } from './TeaserComponent';
import './teaser.scss';
import './lazyTeaser.js';
import { withContainer } from '@kickstartds/core/lib/container';

export const TeaserContextDefault = forwardRef(TeaserComponent);
export const TeaserContext = createContext(TeaserContextDefault);
export const Teaser = withContainer('teaser', TeaserContext);
