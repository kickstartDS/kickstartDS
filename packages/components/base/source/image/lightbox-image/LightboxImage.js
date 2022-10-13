import PhotoSwipe from 'photoswipe';
import { Component } from '@kickstartds/core/component';
import { identifier } from './LightboxImage.desc';

export default class LightboxImage extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);

    this.link = element.querySelector('.lightbox-image__link');
    this.link.addEventListener('click', this);
  }

  onclick(event) {
    // stop everything else associated to that click
    event.preventDefault();
    event.stopPropagation();

    if (!this.link.hasAttribute('data-gallery')) {
      this.link.setAttribute('data-gallery', Math.random());
    }

    const galleryIdentifier = `[data-gallery="${this.link.getAttribute(
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
    const startIndex = galleryImages.indexOf(this.link);
    const items = galleryImages.map((imageWrapper) => {
      const caption = imageWrapper.nextElementSibling;
      const img = imageWrapper.querySelector('img');

      return {
        element: img,
        src: imageWrapper.getAttribute('href'),
        msrc: img && img.getAttribute('src'),
        width: imageWrapper.dataset.sizeW,
        height: imageWrapper.dataset.sizeH,
        alt: img.getAttribute('alt'),
        title: caption ? caption.textContent : '',
      };
    });

    const lightbox = new PhotoSwipe({
      index: startIndex,
      bgOpacity: 0.9,
      dataSource: items,
      returnFocus: false,
    });

    lightbox.on('uiRegister', () => {
      lightbox.ui.registerElement({
        name: 'caption',
        order: 9,
        isButton: false,
        appendTo: 'root',
        onInit(el) {
          lightbox.on('change', () => {
            el.textContent = lightbox.currSlide.data.title;
          });
        },
      });
    });

    lightbox.on('destroy', () => {
      if (sliderElement) {
        // go to slide where the image was last seen in PhotoSwipe
        window.rm.radio.emit('content.slider.go', {
          element: sliderElement,
          args: [`=${lightbox.currIndex}`],
        });
      } else {
        // Set focus back to thumbnail of last viewed image,
        // if thumbnail is not part of a slider
        galleryImages[lightbox.currIndex].focus();
      }
    });

    // initializes and opens PhotoSwipe
    lightbox.init();
  }
}
