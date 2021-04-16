import { registerModule } from '@rm-frontend/core';
import { identifier } from './Slider.desc';

export const lazySlider = () => import('./Slider.js');

registerModule({
  [identifier]: lazySlider,
});
