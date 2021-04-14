const metaNav = document.querySelector('.nav-meta-container');

const elements = [
  {
    element: document.body,
    property: 'marginRight',
  },
  {
    element: metaNav,
    property: 'paddingRight',
  },
  {
    element: metaNav,
    property: 'marginRight',
    negative: true,
  },
  {
    element: document.querySelector('.main-header'),
    property: 'paddingRight',
  },
  {
    element: document.querySelector('.overlay'),
    property: 'paddingRight',
  },
  {
    element: document.querySelector('.contact-flag-label'),
    property: 'right',
  },
  {
    element: document.querySelector('.scroll-to-top'),
    property: 'marginRight',
  },
  {
    element: document.querySelector('.nav-toggle'),
    property: 'margin-right',
  },
  {
    element: document.querySelector('.real-estate-actions__sticky'),
    property: 'right',
  },
];

const lazyElements = [
  {
    getElement: () => document.querySelector('.cc-compliance'),
    property: 'marginRight',
  },
];

function setStyle(value) {
  lazyElements.forEach(({ getElement, property }, index, array) => {
    const element = getElement();
    if (element) {
      elements.push({ element, property });
      array.splice(index, 1);
    }
  });

  elements.forEach(({ element, property, negative }) => {
    if (element) {
      element.style[property] = `${value && negative ? '-' : ''}${value}`;
    }
  });
}

export default {
  lock() {
    setStyle(`${window.innerWidth - document.body.offsetWidth}px`);
    document.body.classList.add('overlay-open');
  },

  reset() {
    setStyle('');
    requestAnimationFrame(() => {
      document.body.classList.remove('overlay-open');
    });
  },
};
