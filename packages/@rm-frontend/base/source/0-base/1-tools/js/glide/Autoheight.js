import { lazyChildrenLoaded } from '../../../2-generic/lazyload/lazysizes';
import forceRepaint from '../forceRepaint';

export default function (Glide, Components, Events) {
  const Autoheight = {
    mount() {
      // repaint to force firefox to recalculate image dimensions (e.g. in product slider)
      forceRepaint();
      this.set();
    },

    set() {
      lazyChildrenLoaded(Components.Html.slides[Glide.index]).then(() => {
        Components.Html.track.style.height = `${
          Components.Html.slides[Glide.index].offsetHeight
        }px`;
      });
    },
  };

  Events.on(['run', 'resize'], Autoheight.set);

  return Autoheight;
}
