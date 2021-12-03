import { define } from '@kickstartds/core/lib/core';
import { identifier } from './CollapsibleBox.desc';

export const lazyCollapsibleBox = () => import('./CollapsibleBox');

define(identifier, lazyCollapsibleBox);
