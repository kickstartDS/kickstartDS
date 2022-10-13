import { define } from '@kickstartds/core/component';
import { identifier } from './LightboxImage.desc';

export const lazySlider = () => import('./LightboxImage');

define(identifier, lazySlider);
