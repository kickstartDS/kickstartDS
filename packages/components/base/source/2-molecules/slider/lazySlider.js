import { define } from '@kickstartds/core/component';
import { identifier } from './Slider.desc';

export const lazySlider = () => import('./Slider');

define(identifier, lazySlider);
