export default function (Glide, Components) {
  const ArrowPosition = {
    arrows: [],

    mount() {
      const arrowsWrapper =
        Components.Html.root.querySelector('.c-slider__arrows');
      if (arrowsWrapper) {
        this.arrows = [...arrowsWrapper.querySelectorAll('.c-slider__arrow')];

        if (this.arrows.length) {
          this.RO = new ResizeObserver(() => this.setArrowsPosition());
          this.RO.observe(Components.Html.root);
          requestAnimationFrame(() => this.setArrowsPosition());
        }
      }
    },

    destroy() {
      if (this.RO) {
        this.RO.unobserve(Components.Html.root);
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
