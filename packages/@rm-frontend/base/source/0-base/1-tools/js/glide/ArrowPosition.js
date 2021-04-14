import { events as breakpointEvents } from '../breakpoints';

export default function (Glide, Components) {
  const ArrowPosition = {
    arrows: [],

    mount() {
      const arrowsWrapper = Components.Controls.items[1];
      if (arrowsWrapper) {
        this.arrows = [...arrowsWrapper.querySelectorAll('.slider__arrow')];

        if (this.arrows.length) {
          requestAnimationFrame(() => this.setArrowsPosition());
          window.rm.radio.on(breakpointEvents.change, () =>
            this.setArrowsPosition()
          );
        }
      }
    },

    setArrowsPosition() {
      const trackHeight = Components.Html.track.clientHeight;
      const rootHeight = Components.Html.root.clientHeight;
      this.arrows.forEach((arrow) => {
        arrow.style.marginTop = `${Math.round(
          (rootHeight - trackHeight) / -2
        )}px`;
      });
    },
  };

  return ArrowPosition;
}
