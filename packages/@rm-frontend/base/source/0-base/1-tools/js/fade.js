import animate from './animate';

export function fadeIn(element, duration = 300) {
  if (element.style.display !== 'block') {
    element.style.display = 'block';
    return animate(element, 'fadeIn', duration);
  }
  return Promise.resolve();
}

export function fadeOut(element, duration = 300) {
  if (element.style.display === 'block') {
    return animate(element, 'fadeOut', duration).then(() => {
      element.style.display = '';
    });
  }
  return Promise.resolve();
}
