import { define } from '@kickstartds/core/lib/core';
import { identifier } from './LightboxImage.desc';

export const lazySlider = () => import('./LightboxImage');

define(identifier, lazySlider);
