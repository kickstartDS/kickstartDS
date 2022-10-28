import merge from 'lodash-es/merge';
import { Component } from '@kickstartds/core/lib/component';
import { windowEvents } from '@kickstartds/core/lib/utils';
// eslint-disable-next-line import/no-extraneous-dependencies
import Keyboard from '@glidejs/glide/src/components/keyboard';
import Glide from './glide/Glide';
import Click from './glide/Click';
import Autoheight from './glide/Autoheight';
import { SliderArrows as sliderArrowsTemplate } from './slider-arrows/SliderArrowsComponent.tsx';

// Keep these in sync with `$current-animation-duration` in _slider-nav.scss
const ANIMATION_SPEED = 400;
const MILLISECONDS_PER_SLIDE = 4000;

const MAIN_SLIDER_OPTIONS = {
  type: 'carousel',
  animationDuration: ANIMATION_SPEED,
  hoverpause: false,
  autoheight: true,
  classes: {
    slider: 'c-slider-main--slider',
    carousel: 'c-slider-main--carousel',
    slide: {
      active: 'c-slider__slide--active',
      clone: 'c-slider__slide--clone',
    },
    cloneSlide: 'c-slider__slide--clone',
    nav: {
      active: 'c-slider-nav__slide--active',
    },
  },
};

const NAV_SLIDER_OPTIONS = {
  type: 'carousel',
  perView: 5,
  focusAt: 'center',
  peek: 50,
  gap: 0,
  swipeThreshold: false,
  dragThreshold: false,
  classes: {
    slider: 'c-slider-nav--slider',
    carousel: 'c-slider-nav--carousel',
    slide: {
      active: 'c-slider-nav__slide--active',
    },
  },
  breakpoints: {
    860: {
      perView: 3,
      peek: 70,
    },
    640: {
      perView: 16,
      peek: 0,
    },
    560: {
      perView: 14,
      peek: 0,
    },
    520: {
      perView: 11,
      peek: 0,
    },
    480: {
      perView: 10,
      peek: 0,
    },
    440: {
      perView: 9,
      peek: 0,
    },
    400: {
      perView: 8,
      peek: 0,
    },
  },
};

const parser = new DOMParser();

const render = (htmlString, root) => {
  const doc = parser.parseFromString(htmlString, 'text/html');
  return Array.from(doc.body.children).map((element) =>
    root.appendChild(element)
  );
};

const arrowsHtml = sliderArrowsTemplate();
const identifier = 'content.slider';
export default class Slider extends Component {
  static identifier = identifier;

  static actions = {
    go: `${identifier}.go`,
  };

  constructor(element, mainOptions = {}, navOptions = {}) {
    super(element);

    this.mainSliderElement = element.querySelector('.c-slider-main');
    this.mainSliderNav = this.mainSliderElement.querySelector('.c-slider-nav');
    this.navSliderElement = this.mainSliderNav.cloneNode(true);
    this.navSliderElement.classList.add('c-slider-nav--slider');
    this.mainNavSlides = this.mainSliderNav.querySelector(
      '.c-slider-nav__slides'
    );
    this.navSliderElement
      .querySelector('.c-slider-nav__slides')
      .removeAttribute('data-glide-el');
    this.slidesCount =
      this.mainSliderElement.querySelectorAll('.c-slider__slide').length;

    if (!this.slidesCount) {
      return;
    }

    element.appendChild(this.navSliderElement);

    [this.mainSliderElement, this.navSliderElement].forEach((slider) => {
      slider.querySelector('.c-slider__track').dataset.glideEl = 'track';

      if (slider.dataset.sliderArrows !== 'none') {
        render(arrowsHtml, slider);
      }
    });

    this.mainSliderOptions = merge(MAIN_SLIDER_OPTIONS, mainOptions, {
      autoplay: element.classList.contains('c-slider--autoplay')
        ? MILLISECONDS_PER_SLIDE
        : false,
    });

    this.mainSlider = new Glide(this.mainSliderElement, this.mainSliderOptions);
    this.navSlider = new Glide(
      this.navSliderElement,
      merge(NAV_SLIDER_OPTIONS, navOptions)
    );

    const mountOptions = { Keyboard };
    if (this.mainSliderOptions.autoheight) {
      mountOptions.Autoheight = Autoheight;
    }
    this.mainSlider
      .on('run', ({ direction, steps }) => this.navSlider.go(direction + steps))
      .mount(mountOptions);

    this.navSlider
      .on('run', ({ direction, steps }) =>
        this.mainSlider.go(direction + steps)
      )
      .mount({ Click });

    const resizeToken = window._ks.radio.on(windowEvents.resize, () => {
      this.setNav();
      this.update();
    });

    this.onDisconnect(() => {
      this.mainSlider.destroy();
      this.navSlider.destroy();
      window._ks.radio.off(resizeToken);
    });

    if (this.mainSliderOptions.autoplay) {
      const scrollToken = window._ks.radio.on(windowEvents.scroll, () =>
        this.setAutoplay()
      );
      this.onDisconnect(() => window._ks.radio.off(scrollToken));
    }

    this.setNav();
    this.update();
  }

  update() {
    // deactivate slider if slides count is equal to perView
    if (this.slidesCount <= this.mainSlider.settings.perView) {
      this.mainSlider.disable();
      this.element.classList.add('c-slider--disabled');
    } else {
      this.mainSlider.enable();
      this.element.classList.remove('c-slider--disabled');
    }
  }

  setNav() {
    if (this.mainNavSlides.scrollWidth > this.mainSliderNav.scrollWidth) {
      this.mainSliderNav.style.height = '0';
      this.navSliderElement.hidden = false;
    } else {
      this.mainSliderNav.style.height = 'auto';
      this.navSliderElement.hidden = true;
    }
  }

  setAutoplay() {
    if (this.isScrolledOutOfView) {
      if (this.element.classList.contains('c-slider--autoplay')) {
        this.mainSlider.update({ autoplay: false });
        this.element.classList.remove('c-slider--autoplay');
      }
    } else if (!this.element.classList.contains('c-slider--autoplay')) {
      this.mainSlider.update({ autoplay: this.mainSliderOptions.autoplay });
      this.element.classList.add('c-slider--autoplay');
    }
  }

  get isScrolledOutOfView() {
    const docViewTop = window.pageYOffset;
    const elemBottom = this.element.offsetHeight;

    return docViewTop > elemBottom;
  }

  go(index) {
    this.mainSlider.go(index);
  }
}
