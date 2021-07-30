import { define } from '@kickstartds/core/core';
import { identifier } from './CollapsibleBox.desc';

export const lazyCollapsibleBox = () => import('./CollapsibleBox.js');

define(identifier, lazyCollapsibleBox);
