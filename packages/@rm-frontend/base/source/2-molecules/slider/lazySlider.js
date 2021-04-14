import { registerModule } from '@rm-frontend/core';
import { identifier } from './Slider.desc';

const lazySlider = () =>
  import(/* webpackChunkName: "base-slider" */ './Slider');

registerModule({
  [identifier]: lazySlider,
});

export default lazySlider;
