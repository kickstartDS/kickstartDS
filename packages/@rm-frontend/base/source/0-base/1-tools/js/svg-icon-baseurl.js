/** https://gist.github.com/leonderijke/c5cf7c5b2e424c0061d2 */

/**
 * SVG Fixer
 *
 * Fixes references to inline SVG elements when the <base> tag is in use.
 * Firefox won't display SVG icons referenced with
 * `<svg><use xlink:href='#id-of-icon-def'></use></svg>` when the <base> tag is on the page.
 *
 * More info:
 * - http://stackoverflow.com/a/18265336/796152
 * - http://www.w3.org/TR/SVG/linking.html
 *
 * One would think that setting the `xml:base` attribute fixes things,
 * but that is being removed from the platform: https://code.google.com/p/chromium/issues/detail?id=341854
 */

export default function svgFixer() {
  /**
   * Current URL, without the hash
   */
  const baseUrl = window.location.href.replace(window.location.hash, '');

  /**
   *  Find all `use` elements with a namespaced `href` attribute, e.g.
   *  <use xlink:href='#some-id'></use>
   *
   *  See: http://stackoverflow.com/a/23047888/796152
   */
  document.querySelectorAll('use[*|href]').forEach((element) => {
    /**
     * Filter out all elements whose namespaced `href` attribute doesn't
     * start with `#` (i.e. all non-relative IRI's)
     *
     * Note: we're assuming the `xlink` prefix for the XLink namespace!
     */
    if (element.getAttribute('xlink:href').indexOf('#') === 0) {
      /**
       * Prepend `window.location` to the namespaced `href` attribute value,
       * in order to make it an absolute IRI
       *
       * Note: we're assuming the `xlink` prefix for the XLink namespace!
       */
      element.setAttribute(
        'xlink:href',
        baseUrl + element.getAttribute('xlink:href')
      );
    }
  });
}
