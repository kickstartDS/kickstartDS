import { html } from '../../../0-base/1-tools/js/render';
import IconTemplate from '../../../1-atoms/icon/IconTemplate';

export default () => html`
  <div className="slider__arrows" data-glide-el="controls">
    <button
      className="slider__arrow slider__arrow--prev"
      data-glide-dir="|<"
      tabindex="{-1}"
    >
      <${IconTemplate} icon="chevron-left" />
    </button>
    <button
      className="slider__arrow slider__arrow--next"
      data-glide-dir="|>"
      tabindex="{-1}"
    >
      <${IconTemplate} icon="chevron-right" />
    </button>
  </div>
`;
