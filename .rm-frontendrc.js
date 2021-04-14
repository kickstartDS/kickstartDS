module.exports = require('./packages/@rm-frontend/instance/.rm-frontendrc').extend(
  {
    // all paths are relative to the current working directory, if not specified otherwise
    paths: {
      // patternlab compilation target
      public: 'dist',

      // public asset paths
      publicJs: 'default/js',
      publicCss: 'default/css',
      publicFonts: 'default/fonts',
      publicImages: 'default/images',
    },
    // in some browsers this value is used to color the adress bar
    themeColor: '#0e7273',

    organization: {
      name: '25SheepStreet',
    },

    logo: {
      alt: '25SheepStreet Logo',
      width: '430',
      height: '84',
      src: {
        default: 'logo.svg',
        'transparent-header': 'logo-light.svg',
      },
    },

    patternlabTestUrl: 'https://ruhmesmeile.com',

    modules: {
      '@rm-frontend/animated-counter': true,
      '@rm-frontend/base': {
        atoms: {
          button: true,
          datepicker: true,
          fileupload: true,
          'link-button': true,
          'scroll-to-top': true,
          'tag-label': true,
          toggle: true,
        },
        molecules: {
          'collapsible-box': true,
          'contact-flag-label': true,
          'content-box-item': true,
          'content-headline': true,
          'content-navigation-item': true,
          'content-slide': true,
          'date-range-picker': true,
          'embedded-map': true,
          'filter-area': true,
          'highlight-text': true,
          'location-map': true,
          'nav-breadcrumb': true,
          'nav-content-menu': true,
          'nav-lang': {
            de: 'Deutsch',
            en: 'English',
            es: 'Español',
            fr: 'Français',
            ru: 'русский',
            cz: 'Čeština',
            sv: 'Svenska',
            pt: 'Português',
          },
          'nav-main': {
            'open-on-hover': false,
          },
          'nav-sidebar': false,
          'overlay-dialog': true,
          slider: true,
          'teaser-box-item': true,
          'text-media': true,
        },
        organisms: {
          'content-box': true,
          'content-slider': true,
          'embedded-map': true,
          header: {
            /**
             * Header Variant
             * `1`  Header variant 1. Logo and main-navigation side by side
             * `2`  Header variant 2. Logo and meta-navigation side by side
             */
            variant: 1,
            meta: true,
          },
          'logo-tiles': true,
          /**
           * Sidebar
           * If `sidebar` is truthy, `base.header.variant` will be ignored
           * `false`    No sidebar
           * `'static'` Default sidebar
           * `'fixed'`  Fixed sidebar
           * `'hidden'` Fixed sidebar, initial hidden (todo)
           * `'rtl'`    Fixed sidebar, initial hidden, RTL (todo)
           */
          sidebar: false,
          'teaser-box-3-items': true,
          'textpic-intextleft': true,
        },
      },
      // '@rm-frontend/business-card': {
      //   molecules: {
      //     'business-card-item': true,
      //   },
      //   organisms: {
      //     'business-card': true,
      //   },
      // },
      // '@rm-frontend/contact-form': true,
      // '@rm-frontend/deals': true,
      // '@rm-frontend/download': true,
      // '@rm-frontend/event': true,
      // '@rm-frontend/extranet': true,
      // '@rm-frontend/flexible-form': true,
      '@rm-frontend/gallery': {
        molecules: {
          'gallery-slide': true,
        },
        organisms: {
          'gallery-slider': true,
        },
      },
      // '@rm-frontend/glossary': {
      //   organisms: {
      //     glossary: true,
      //   }
      // },
      // '@rm-frontend/location-finder': true,
      // '@rm-frontend/mail-download': true,
      '@rm-frontend/news': {
        molecules: {
          'news-item': true,
          'news-list-item': true,
          'news-latest-item': true,
        },
        organisms: {
          'news-latest': true,
          'news-list': true,
          'news-detail': true,
          'news-detail-video': true,
        },
      },
      '@rm-frontend/pagination': true,
      // '@rm-frontend/product': {
      //   organisms: {
      //     product: true,
      //   },
      // },
      '@rm-frontend/quotes': {
        molecules: {
          quote: true,
        },
        organisms: {
          'quotes-slider': true,
        },
      },
      // '@rm-frontend/real-estate': true,
      // '@rm-frontend/reference': true,
      // '@rm-frontend/search': true,
      // '@rm-frontend/share-bar': true,
      '@rm-frontend/storytelling': {
        molecules: {
          storytelling: true,
        },
      },
      // '@rm-frontend/tabs': true,
      // '@rm-frontend/typo3': true,
      '@rm-frontend/visuals': {
        molecules: {
          visual: true,
          'visual-slider': true,
          'visual-slide-preview': true,
          'intro-visual': true,
          keyvisual: true,
          'keyvisual-slider': true,
          'content-visual': true,
          'content-visual-slider': true,
        },
      },
    },
  }
);
