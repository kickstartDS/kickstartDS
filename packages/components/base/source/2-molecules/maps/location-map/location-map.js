import { Component } from '@kickstartds/core/lib/core';
import styles from '~instance/settings/base/google-maps-styles';
import loadJs from '../../../0-base/1-tools/js/load-js';
import marker from './location-map-marker';

let mapsLoaded;
const loadGoogleMaps = () =>
  new Promise((resolve) => {
    loadJs(
      `https://maps.googleapis.com/maps/api/js?key=${window.rm.googleMapsKey}`,
      () => resolve(window.google.maps)
    );
  });

const mapsReady = () =>
  new Promise((resolve) => {
    if (window.google && window.google.maps) {
      resolve(window.google.maps);
    } else if (!mapsLoaded) {
      mapsLoaded = loadGoogleMaps().then(() => resolve(window.google.maps));
    } else {
      mapsLoaded.then(() => resolve(window.google.maps));
    }
  });

export default class LocationMap extends Component {
  static identifier = 'base.location-map';

  constructor(element) {
    super(element);

    const lat = parseFloat(element.dataset.lat);
    const lng = parseFloat(element.dataset.long);

    if (!(Number.isNaN(lat) || Number.isNaN(lng))) {
      mapsReady().then((maps) => {
        // check if touch device or not: get 'true' or 'false' and add this to map-options
        const touchDevice = !('ontouchend' in document.documentElement);

        const mapOptions = {
          center: { lat, lng },
          zoom: 15,
          scrollwheel: false,
          draggable: touchDevice,
          streetViewControl: false,
          styles,
          disableDefaultUI: true,
          zoomControl: true,
        };

        const mapContainer = element.querySelector(
          '.location-map__map__content'
        );
        const googleMap = new maps.Map(mapContainer, mapOptions);

        // eslint-disable-next-line no-new
        new maps.Marker({
          position: { lat, lng },
          map: googleMap,
          icon: {
            anchor: new maps.Point(23, 64),
            url: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
              marker
            )}`,
          },
        });

        maps.event.addListenerOnce(googleMap, 'tilesloaded', () => {
          element.classList.add('location-map--initialized');
        });
      });
    }
  }
}
