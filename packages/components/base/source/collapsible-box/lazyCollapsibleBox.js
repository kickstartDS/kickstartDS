import { define } from '@kickstartds/core/component';
import { identifier } from './CollapsibleBox.desc';

export const lazyCollapsibleBox = () => import('./CollapsibleBox');

define(identifier, lazyCollapsibleBox);
