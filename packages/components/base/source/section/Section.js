import { Component, define } from '@kickstartds/core/lib/component';

export const getSectionSlider = () =>
  import('./SectionSlider').then((mod) => mod.initSectionSlider);

const identifier = 'base.section';
export default class Section extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);
    const sliderContainer = element.querySelector('.l-section__slider');
    if (sliderContainer) {
      getSectionSlider().then((initSectionSlider) => {
        const cleanup = initSectionSlider(sliderContainer);
        this.onDisconnect(cleanup);
      });
    }
  }
}

define(identifier, Section);
