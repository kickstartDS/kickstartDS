export default function (Glide, Components) {
  const activeSelector = `.${Glide.settings.classes.slide.active}`;
  const Click = {
    slides: [],

    mount() {
      this.slides = [...Components.Html.track.querySelectorAll('button')];
      Components.Html.track.addEventListener('click', ({ target }) => {
        const activeSlide = Components.Html.track.querySelector(activeSelector);
        const activeIndex = this.slides.indexOf(activeSlide);
        const clickedIndex = this.slides.indexOf(target.closest('button'));
        const steps = clickedIndex - activeIndex;

        if (steps !== 0) {
          const direction = steps > 0 ? '>' : '<';
          Components.Run.make(`${direction}${steps * -1}`);
        }
      });
    },
  };

  return Click;
}
