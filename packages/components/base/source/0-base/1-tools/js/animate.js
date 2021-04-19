// https://github.com/daneden/animate.css

export default function animate(element, animationName, duration) {
  return new Promise((resolve) => {
    element.classList.add('animate');
    element.style.animationDuration = `${duration}ms`;
    element.style.animationName = animationName;

    function handleAnimationEnd() {
      element.classList.remove('animate');
      element.style.animationDuration = '';
      element.style.animationName = '';
      element.removeEventListener('animationend', handleAnimationEnd);
      resolve();
    }

    element.addEventListener('animationend', handleAnimationEnd);
  });
}
