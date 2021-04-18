import { define } from '@kickstartds/core/lib/core';
import { identifier } from './Slider.desc';

export const lazySlider = () => import('./Slider.js');

define(identifier, lazySlider);
