import PhotoSwipe from 'photoswipe/dist/photoswipe';
import PhotoSwipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import { Component } from '@kickstartds/core/lib/core';
import { actions as sliderActions } from '../../2-molecules/slider/Slider.desc';
import { identifier } from './Lightbox.desc';

export default class Lightbox extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);

    document.addEventListener('click', this);
  }

  onclick(event) {
    const link = event.target.closest('.js-open-lightbox');
    if (link) {
      // stop everything else associated to that click
      event.preventDefault();
      event.stopPropagation();

      if (!link.hasAttribute('data-gallery')) {
        link.setAttribute('data-gallery', Math.random());
      }

      const galleryIdentifier = `[data-gallery="${link.getAttribute(
        'data-gallery'
      )}"]`;
      const sliderElement = event.target.closest('.slider');
      const galleryImages = sliderElement
        ? [
            ...sliderElement.querySelectorAll(
              '.slider__slide:not(.slider__slide--clone)'
            ),
          ].map((slide) => slide.querySelector(galleryIdentifier))
        : [...document.querySelectorAll(galleryIdentifier)];

      // generate item objects and detect startIndex
      const startIndex = galleryImages.indexOf(link);
      const items = galleryImages.map((imageWrapper) => {
        const caption = imageWrapper.nextElementSibling;
        const img = imageWrapper.querySelector('img');

        return {
          src: imageWrapper.getAttribute('href'),
          msrc: img && img.getAttribute('src'),
          w: imageWrapper.dataset.sizeW,
          h: imageWrapper.dataset.sizeH,
          title: caption ? caption.textContent : '',
        };
      });

      // define options
      const options = {
        index: startIndex,
        shareEl: false,
        showHideOpacity: true,
        bgOpacity: 0.9,
        closeOnScroll: false,
        history: false,
      };

      this.element.addEventListener('focusout', this);

      const lightbox = new PhotoSwipe(
        this.element,
        PhotoSwipeUIDefault,
        items,
        options
      );

      lightbox.listen('beforeChange', () => {
        this.element.setAttribute('aria-busy', 'true');
      });

      lightbox.listen('afterChange', () => {
        this.element.setAttribute('aria-busy', 'false');
      });

      lightbox.listen('destroy', () => {
        this.element.removeEventListener('focusout', this);

        if (sliderElement) {
          // go to slide where the image was last seen in PhotoSwipe
          window.rm.radio.emit(sliderActions.go, {
            element: sliderElement,
            args: [`=${lightbox.getCurrentIndex()}`],
          });
        } else {
          // Set focus back to thumbnail of last viewed image,
          // if thumbnail is not part of a slider
          galleryImages[lightbox.getCurrentIndex()].focus();
        }
      });

      // initializes and opens PhotoSwipe
      lightbox.init();
    }
  }

  onfocusout(focusEvent) {
    if (!this.element.contains(focusEvent.relatedTarget)) {
      this.element.focus();
    }
  }
}
