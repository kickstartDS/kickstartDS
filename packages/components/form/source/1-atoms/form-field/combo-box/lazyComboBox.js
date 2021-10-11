import { define } from '@kickstartds/core/lib/core';
import { identifier } from './ComboBox.desc';

export const lazyComboBox = () => import('./ComboBox');

define(identifier, lazyComboBox);
