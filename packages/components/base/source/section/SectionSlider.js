const passiveOptions = { passive: true };
const initNavButtons = (
  prevBtn,
  nextBtn,
  sliderContainer,
  sectionContent,
  slide
) => {
  const move = (forward) => {
    const gutter = Number(
      getComputedStyle(sectionContent)
        .getPropertyValue('grid-gap')
        .split('px')[0]
    );
    const slideWidth = Math.ceil(slide.offsetWidth + gutter);
    const fraction = sliderContainer.scrollLeft / slideWidth;
    const slideIndex = forward
      ? Math.floor(fraction) + 1
      : Math.ceil(fraction) - 1;

    sliderContainer.scrollTo({
      left: slideIndex * slideWidth,
      behavior: 'smooth',
    });
  };
  const moveBack = () => move(false);
  const moveForward = () => move(true);

  const setNavButtonDisabled = () => {
    prevBtn.disabled = sliderContainer.scrollLeft < 1;
    nextBtn.disabled =
      sliderContainer.scrollLeft + sliderContainer.offsetWidth >=
      sliderContainer.scrollWidth;
  };

  prevBtn.addEventListener('click', moveBack);
  nextBtn.addEventListener('click', moveForward);
  sliderContainer.addEventListener(
    'scroll',
    setNavButtonDisabled,
    passiveOptions
  );

  setNavButtonDisabled();

  prevBtn.style.visibility = 'visible';
  nextBtn.style.visibility = 'visible';

  return () => {
    prevBtn.removeEventListener('click', moveBack);
    nextBtn.removeEventListener('click', moveForward);
    sliderContainer.removeEventListener(
      'scroll',
      setNavButtonDisabled,
      passiveOptions
    );
  };
};
const initMomentumTracking = (sliderContainer) => {
  sliderContainer.style.cursor = 'grab';
  sliderContainer.style.userSelect = 'none';

  let scrollLeft = 0; // The current scroll
  let startX = 0; // The current mouse position
  let velX = 0; // Velocitiy
  let momentumID;
  let isDragging = false;

  const cancelMomentumTracking = () => cancelAnimationFrame(momentumID);

  const momentumLoop = () => {
    sliderContainer.scrollLeft += velX;
    velX *= 0.9;
    if (Math.abs(velX) > 0.5) {
      momentumID = requestAnimationFrame(momentumLoop);
    }
  };

  const beginMomentumTracking = () => {
    cancelMomentumTracking();
    momentumID = requestAnimationFrame(momentumLoop);
  };

  const mouseMoveHandler = (e) => {
    e.preventDefault();

    const dx = e.clientX - startX;
    const prevScrollLeft = sliderContainer.scrollLeft;
    sliderContainer.scrollLeft = scrollLeft - dx;
    velX = sliderContainer.scrollLeft - prevScrollLeft;
    isDragging = true;
  };

  const mouseUpHandler = () => {
    document.removeEventListener('mousemove', mouseMoveHandler, passiveOptions);
    document.removeEventListener('mouseup', mouseUpHandler, passiveOptions);
    document.removeEventListener('mouseleave', mouseUpHandler, passiveOptions);

    sliderContainer.style.cursor = 'grab';
    sliderContainer.style.removeProperty('user-select');
    beginMomentumTracking();

    requestAnimationFrame(() => {
      isDragging = false;
    });
  };

  const mouseDownHandler = (e) => {
    scrollLeft = sliderContainer.scrollLeft;
    startX = e.clientX;

    sliderContainer.style.cursor = 'grabbing';
    sliderContainer.style.userSelect = 'none';

    document.addEventListener('mousemove', mouseMoveHandler, passiveOptions);
    document.addEventListener('mouseup', mouseUpHandler, passiveOptions);
    document.addEventListener('mouseleave', mouseUpHandler, passiveOptions);
    cancelMomentumTracking();
  };

  const clickHandler = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  sliderContainer.addEventListener(
    'mousedown',
    mouseDownHandler,
    passiveOptions
  );
  sliderContainer.addEventListener('click', clickHandler, true);
  sliderContainer.addEventListener(
    'wheel',
    cancelMomentumTracking,
    passiveOptions
  );

  return () => {
    document.removeEventListener('mousemove', mouseMoveHandler, passiveOptions);
    document.removeEventListener('mouseup', mouseUpHandler, passiveOptions);
    document.removeEventListener('mouseleave', mouseUpHandler, passiveOptions);
    sliderContainer.removeEventListener(
      'mousedown',
      mouseDownHandler,
      passiveOptions
    );
    sliderContainer.removeEventListener(
      'wheel',
      cancelMomentumTracking,
      passiveOptions
    );
    sliderContainer.removeEventListener('click', clickHandler, true);
  };
};

export const initSectionSlider = (sliderContainer) => {
  const cleanupCallbacks = [];
  const [prevBtn, nextBtn] =
    sliderContainer.nextElementSibling.querySelectorAll(
      '.l-section__slider-arrow'
    );

  if (prevBtn && nextBtn) {
    const sectionContent = sliderContainer.querySelector('.l-section__content');
    const firstSlide = sectionContent.firstElementChild;
    if (firstSlide) {
      const cleanupNav = initNavButtons(
        prevBtn,
        nextBtn,
        sliderContainer,
        sectionContent,
        firstSlide
      );
      cleanupCallbacks.push(cleanupNav);
    }
  }

  const cleanupMomentumTracking = initMomentumTracking(sliderContainer);
  cleanupCallbacks.push(cleanupMomentumTracking);

  return () => {
    for (const cleanupCallback of cleanupCallbacks) {
      cleanupCallback();
    }
  };
};
