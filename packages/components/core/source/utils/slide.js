function getHeight(element) {
  const parent = element.parentNode;
  const clone = element.cloneNode(true);
  clone.removeAttribute('ks-component');
  clone.style.cssText = 'visibility: hidden; display: block;';
  const height = parent.appendChild(clone).clientHeight;
  parent.removeChild(clone);
  return height;
}

function slide(
  element,
  start,
  end,
  duration = Math.floor(Math.max(start, end) / 3 + 150)
) {
  cancelAnimationFrame(element.dataset.slideFrame);

  const delta = end - start;

  element.style.display = 'block';
  element.style.overflow = 'hidden';

  const init = new Date().getTime();

  function repeat(resolve) {
    const elapsedTime = new Date().getTime() - init;
    const newHeight = Math.floor(start + (delta * elapsedTime) / duration);

    if (elapsedTime <= duration) {
      element.style.height = `${newHeight}px`;
    } else if (end === 0) {
      element.style.display = 'none';
    }

    element.dataset.slideFrame = requestAnimationFrame(() => repeat(resolve));

    if (newHeight < 0 || newHeight > Math.abs(delta)) {
      cancelAnimationFrame(element.dataset.slideFrame);

      element.style.removeProperty('height');
      element.style.removeProperty('overflow');

      resolve();
    }
  }

  return new Promise(repeat);
}

export function slideDown(element, duration) {
  const originalHeight = getHeight(element);
  const currentHeight = element.clientHeight;

  return currentHeight <= originalHeight / 2
    ? slide(element, 0, originalHeight, duration)
    : Promise.resolve();
}

export function slideUp(element, duration) {
  const originalHeight = getHeight(element);
  const currentHeight = element.clientHeight;

  return currentHeight > originalHeight / 2
    ? slide(element, originalHeight, 0, duration)
    : Promise.resolve();
}

export function slideToggle(element, duration) {
  const originalHeight = getHeight(element);
  const currentHeight = element.clientHeight;
  const [start, end] =
    currentHeight > originalHeight / 2
      ? [originalHeight, 0]
      : [0, originalHeight];

  return slide(element, start, end, duration);
}
