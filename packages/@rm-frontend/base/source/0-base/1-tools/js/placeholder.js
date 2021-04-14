/**
 * Adapted from [1] by Wes Bos
 *
 * [1]: https://codepen.io/wesbos/pen/KggoOo
 */
function placeholderPolyfill({ target }) {
  target.classList[target.value ? 'remove' : 'add']('placeholder-shown');
}

export default function () {
  document.querySelectorAll('[placeholder]').forEach((element) => {
    placeholderPolyfill({ target: element });
  });

  document.addEventListener('change', placeholderPolyfill);
  document.addEventListener('keyup', placeholderPolyfill);
}
