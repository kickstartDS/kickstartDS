import { define } from '@kickstartds/core/lib/core';
import { identifier } from './Slider.desc';

export const lazySlider = () => import('./Slider');

define(identifier, lazySlider);
